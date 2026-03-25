document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

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

  const hiddenProjects = document.querySelectorAll(".hidden-projects");
  const toggleButton = document.getElementById("toggleBtn");

  if (toggleButton && hiddenProjects.length > 0) {
    toggleButton.addEventListener("click", () => {
      const isVisible = hiddenProjects[0].classList.contains("visible");

      hiddenProjects.forEach((element) => {
        element.classList.toggle("visible", !isVisible);
      });

      toggleButton.textContent = isVisible ? "Voir plus" : "Voir moins";
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
