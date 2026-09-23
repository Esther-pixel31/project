const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const year = document.querySelector("#current-year");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        const isOpen = mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });

    });
}