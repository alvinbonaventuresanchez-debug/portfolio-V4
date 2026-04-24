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
