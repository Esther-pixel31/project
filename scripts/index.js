document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate");
  const progressBars = document.querySelectorAll(".progress");

  function checkVisibility() {
    animatedElements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight * 0.85) {
        el.classList.add("visible");
      }
    });

    progressBars.forEach((bar) => {
      const position = bar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight * 0.85) {
        bar.style.width = bar.getAttribute("style").split(":")[1]; // Trigger width animation
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Run once on load
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate");

    function checkVisibility() {
      animatedElements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight * 0.85) {
          el.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once on load
  });

  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        document
          .querySelector(".filter-btn.active")
          .classList.remove("active");
        this.classList.add("active");

        const category = this.getAttribute("data-category");

        projects.forEach((project) => {
          if (
            category === "all" ||
            project.getAttribute("data-category") === category
          ) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  });