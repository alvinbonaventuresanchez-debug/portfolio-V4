document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const reveals = document.querySelectorAll(".reveal");
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach((image) => {
    image.decoding = "async";
    image.fetchPriority = "low";
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), index * 60);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("visible"));
  }

  const projectCategories = document.querySelectorAll(".project-category");

  if (projectCategories.length > 0) {
    const maxVisibleProjectEntries = 8;
    const getProjectCarouselPageSize = () => {
      if (window.innerWidth <= 620) {
        return 2;
      }

      if (window.innerWidth <= 900) {
        return 4;
      }

      if (window.innerWidth <= 1200) {
        return 6;
      }

      return 8;
    };

    const projectOverflowCarousels = [];

    const initializeProjectOverflowCarousel = (category) => {
      const projectList = category.querySelector(".project-list");

      if (!projectList) {
        return;
      }

      const entries = Array.from(projectList.children).filter((item) =>
        item.classList.contains("project-entry"));

      if (entries.length <= maxVisibleProjectEntries) {
        return;
      }

      const carousel = document.createElement("div");
      carousel.className = "project-carousel";
      carousel.innerHTML = `
        <div class="project-carousel-header">
          <p class="project-carousel-label">Autres visuels</p>
          <div class="project-carousel-controls">
            <span class="project-carousel-status" aria-live="polite"></span>
            <button class="project-carousel-arrow" type="button" data-direction="prev" aria-label="Voir les elements precedents">&larr;</button>
            <button class="project-carousel-arrow" type="button" data-direction="next" aria-label="Voir les elements suivants">&rarr;</button>
          </div>
        </div>
        <div class="project-carousel-viewport">
          <div class="project-carousel-track"></div>
        </div>
      `;

      projectList.replaceWith(carousel);

      const track = carousel.querySelector(".project-carousel-track");
      const status = carousel.querySelector(".project-carousel-status");
      const previousButton = carousel.querySelector('[data-direction="prev"]');
      const nextButton = carousel.querySelector('[data-direction="next"]');
      const carouselState = {
        currentPage: 0,
        pageSize: getProjectCarouselPageSize(),
        slides: []
      };

      if (!track || !status || !previousButton || !nextButton) {
        return;
      }

      const updateProjectCarousel = () => {
        const lastPageIndex = Math.max(0, carouselState.slides.length - 1);

        carouselState.currentPage = Math.min(carouselState.currentPage, lastPageIndex);
        track.style.transform = `translateX(-${carouselState.currentPage * 100}%)`;

        carouselState.slides.forEach((slide, index) => {
          slide.setAttribute("aria-hidden", String(index !== carouselState.currentPage));
        });

        status.textContent = `${carouselState.currentPage + 1} / ${Math.max(carouselState.slides.length, 1)}`;
        previousButton.disabled = carouselState.currentPage === 0;
        nextButton.disabled = carouselState.currentPage === lastPageIndex;
      };

      const renderProjectCarousel = () => {
        const nextPageSize = getProjectCarouselPageSize();
        const firstVisibleEntryIndex = carouselState.currentPage * carouselState.pageSize;

        carouselState.pageSize = nextPageSize;
        carouselState.currentPage = Math.floor(firstVisibleEntryIndex / nextPageSize);
        track.replaceChildren();
        carouselState.slides = [];

        for (let index = 0; index < entries.length; index += nextPageSize) {
          const slide = document.createElement("div");
          const grid = document.createElement("div");

          slide.className = "project-carousel-slide";
          grid.className = "project-carousel-grid";

          entries.slice(index, index + nextPageSize).forEach((entry) => {
            grid.appendChild(entry);
          });

          slide.appendChild(grid);
          track.appendChild(slide);
          carouselState.slides.push(slide);
        }

        updateProjectCarousel();
      };

      previousButton.addEventListener("click", () => {
        if (carouselState.currentPage === 0) {
          return;
        }

        carouselState.currentPage -= 1;
        updateProjectCarousel();
      });

      nextButton.addEventListener("click", () => {
        if (carouselState.currentPage >= carouselState.slides.length - 1) {
          return;
        }

        carouselState.currentPage += 1;
        updateProjectCarousel();
      });

      renderProjectCarousel();
      projectOverflowCarousels.push(renderProjectCarousel);
    };

    const loadDeferredImages = (category) => {
      if (!category) {
        return;
      }

      const deferredImages = category.querySelectorAll("img[data-src]");

      deferredImages.forEach((image) => {
        image.src = image.dataset.src;
        image.removeAttribute("data-src");
      });
    };

    projectCategories.forEach((category) => {
      initializeProjectOverflowCarousel(category);
    });

    if (projectOverflowCarousels.length > 0) {
      let resizeTimer = null;

      window.addEventListener("resize", () => {
        window.clearTimeout(resizeTimer);

        resizeTimer = window.setTimeout(() => {
          projectOverflowCarousels.forEach((renderProjectCarousel) => {
            renderProjectCarousel();
          });
        }, 120);
      });
    }

    const setProjectCategoryState = (activeCategory) => {
      projectCategories.forEach((category) => {
        const toggle = category.querySelector(".project-category-toggle");
        const panel = category.querySelector(".project-category-panel");
        const action = category.querySelector(".project-category-action");
        const isOpen = category === activeCategory;

        if (isOpen) {
          loadDeferredImages(category);
        }

        category.classList.toggle("is-open", isOpen);

        if (toggle) {
          toggle.setAttribute("aria-expanded", String(isOpen));
        }

        if (panel) {
          panel.setAttribute("aria-hidden", String(!isOpen));
        }

        if (action) {
          action.textContent = isOpen ? "Fermer" : "Cliquer pour ouvrir la categorie";
        }
      });
    };

    let initialOpenCategory = document.querySelector(".project-category.is-open");

    if (!initialOpenCategory) {
      initialOpenCategory = projectCategories[0];
    }

    setProjectCategoryState(initialOpenCategory);

    projectCategories.forEach((category) => {
      const toggle = category.querySelector(".project-category-toggle");

      if (!toggle) {
        return;
      }

      toggle.addEventListener("click", () => {
        const shouldOpen = !category.classList.contains("is-open");
        setProjectCategoryState(shouldOpen ? category : null);
      });
    });
  }

  const lightboxableImages = document.querySelectorAll([
    ".project-entry:not(.project-entry--course) .project-entry-image",
    ".detail-gallery-item img",
    ".detail-hero-visual img"
  ].join(", "));
  const lightboxableLinks = document.querySelectorAll(".project-entry--course .project-entry-media-link");

  if (body && (lightboxableImages.length > 0 || lightboxableLinks.length > 0)) {
    const lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.setAttribute("hidden", "");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML = `
      <div class="image-lightbox-shell" role="dialog" aria-modal="true" aria-label="Image agrandie">
        <button class="image-lightbox-close" type="button" aria-label="Fermer l'image">&times;</button>
        <figure class="image-lightbox-figure">
          <img class="image-lightbox-image" alt="" />
          <figcaption class="image-lightbox-caption" hidden></figcaption>
        </figure>
      </div>
    `;

    body.appendChild(lightbox);

    const lightboxShell = lightbox.querySelector(".image-lightbox-shell");
    const lightboxImage = lightbox.querySelector(".image-lightbox-image");
    const lightboxCaption = lightbox.querySelector(".image-lightbox-caption");
    const lightboxClose = lightbox.querySelector(".image-lightbox-close");
    let activeLightboxTrigger = null;
    let closeLightboxTimer = null;

    const getImageCaption = (image) => {
      const figureCaption = image.closest("figure")?.querySelector("figcaption")?.textContent?.trim();

      if (figureCaption) {
        return figureCaption;
      }

      const entryTitle = image.closest(".project-entry")?.querySelector("h4")?.textContent?.trim();

      if (entryTitle) {
        return entryTitle;
      }

      return image.getAttribute("alt")?.trim() || "";
    };

    const closeImageLightbox = () => {
      if (!lightbox.classList.contains("is-open")) {
        return;
      }

      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      body.classList.remove("has-lightbox-open");
      window.clearTimeout(closeLightboxTimer);

      closeLightboxTimer = window.setTimeout(() => {
        lightbox.setAttribute("hidden", "");
        lightboxImage.removeAttribute("src");

        if (activeLightboxTrigger) {
          activeLightboxTrigger.focus();
          activeLightboxTrigger = null;
        }
      }, 220);
    };

    const openImageLightbox = (image, trigger = image) => {
      const source = image.currentSrc || image.getAttribute("src") || image.dataset.src;

      if (!source) {
        return;
      }

      const caption = getImageCaption(image);

      activeLightboxTrigger = trigger;
      window.clearTimeout(closeLightboxTimer);
      lightboxImage.src = source;
      lightboxImage.alt = image.getAttribute("alt") || "";

      if (caption) {
        lightboxCaption.textContent = caption;
        lightboxCaption.hidden = false;
      } else {
        lightboxCaption.textContent = "";
        lightboxCaption.hidden = true;
      }

      lightbox.removeAttribute("hidden");
      lightbox.setAttribute("aria-hidden", "false");
      body.classList.add("has-lightbox-open");

      window.requestAnimationFrame(() => {
        lightbox.classList.add("is-open");
        lightboxClose?.focus();
      });
    };

    lightboxableImages.forEach((image) => {
      const label = getImageCaption(image) || "Image du projet";

      image.classList.add("lightboxable-image");
      image.setAttribute("tabindex", "0");
      image.setAttribute("role", "button");
      image.setAttribute("aria-haspopup", "dialog");
      image.setAttribute("aria-label", `Ouvrir l'image en grand : ${label}`);

      image.addEventListener("click", () => {
        openImageLightbox(image);
      });

      image.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        openImageLightbox(image);
      });
    });

    lightboxableLinks.forEach((link) => {
      const image = link.querySelector("img");
      const label = image ? getImageCaption(image) || "Image du projet" : "Image du projet";

      link.classList.add("lightboxable-link");
      link.setAttribute("aria-haspopup", "dialog");
      link.setAttribute("aria-label", `Ouvrir l'image en grand : ${label}`);

      link.addEventListener("click", (event) => {
        if (!image || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }

        event.preventDefault();
        openImageLightbox(image, link);
      });

      link.addEventListener("keydown", (event) => {
        if (!image || (event.key !== "Enter" && event.key !== " ")) {
          return;
        }

        event.preventDefault();
        openImageLightbox(image, link);
      });
    });

    lightboxClose?.addEventListener("click", closeImageLightbox);

    lightbox.addEventListener("click", (event) => {
      if (!lightboxShell || lightboxShell.contains(event.target)) {
        return;
      }

      closeImageLightbox();
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeImageLightbox();
      }
    });
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");

  if (body && !prefersReducedMotion.matches && finePointer.matches) {
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let haloFrame = null;
    const glowBlocks = document.querySelectorAll(".project-category-toggle, .project-entry");

    const renderMouseHalo = () => {
      body.style.setProperty("--cursor-x", `${cursorX}px`);
      body.style.setProperty("--cursor-y", `${cursorY}px`);
      haloFrame = null;
    };

    const queueMouseHaloRender = () => {
      if (haloFrame !== null) {
        return;
      }

      haloFrame = window.requestAnimationFrame(renderMouseHalo);
    };

    queueMouseHaloRender();

    window.addEventListener("pointermove", (event) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      body.style.setProperty("--cursor-opacity", "1");
      queueMouseHaloRender();
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
      body.style.setProperty("--cursor-opacity", "0");
    });

    window.addEventListener("blur", () => {
      body.style.setProperty("--cursor-opacity", "0");
    });

    glowBlocks.forEach((block) => {
      const updateBlockGlow = (event) => {
        const rect = block.getBoundingClientRect();
        const localX = event.clientX - rect.left;
        const localY = event.clientY - rect.top;

        block.style.setProperty("--block-glow-x", `${localX}px`);
        block.style.setProperty("--block-glow-y", `${localY}px`);
        block.style.setProperty("--block-glow-opacity", "1");
      };

      block.addEventListener("pointerenter", updateBlockGlow);
      block.addEventListener("pointermove", updateBlockGlow, { passive: true });
      block.addEventListener("pointerleave", () => {
        block.style.setProperty("--block-glow-opacity", "0");
      });
    });
  }

  const nav = document.querySelector("nav");
  const updateNavBorder = () => {
    if (!nav) {
      return;
    }

    nav.style.borderBottomColor = window.scrollY > 50
      ? "rgba(124, 92, 252, 0.2)"
      : "rgba(124, 92, 252, 0.1)";
  };

  updateNavBorder();
  window.addEventListener("scroll", updateNavBorder, { passive: true });
});
