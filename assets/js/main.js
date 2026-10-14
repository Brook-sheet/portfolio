const themeButton = document.getElementById("logo");
const openButton = document.getElementById("open-sidebar-button");
const closeButton = document.getElementById("close-sidebar-button");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const mobileNav = window.matchMedia("(max-width: 900px)");

if (themeButton) {
    themeButton.setAttribute(
        "aria-pressed",
        String(document.documentElement.classList.contains("darkmode")),
    );

    themeButton.addEventListener("click", () => {
        const enabled = document.documentElement.classList.toggle("darkmode");
        themeButton.setAttribute("aria-pressed", String(enabled));

        if (enabled) {
            localStorage.setItem("darkmode", "active");
        } else {
            localStorage.removeItem("darkmode");
        }
    });
}

if (openButton && closeButton && navbar && overlay) {
    const closeSidebar = (restoreFocus = false) => {
        navbar.classList.remove("show");
        openButton.setAttribute("aria-expanded", "false");
        navbar.toggleAttribute("inert", mobileNav.matches);

        if (restoreFocus) {
            openButton.focus();
        }
    };

    const openSidebar = () => {
        navbar.classList.add("show");
        openButton.setAttribute("aria-expanded", "true");
        navbar.removeAttribute("inert");
        closeButton.focus();
    };

    openButton.addEventListener("click", openSidebar);
    closeButton.addEventListener("click", () => closeSidebar(true));
    overlay.addEventListener("click", () => closeSidebar());
    navbar.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement && mobileNav.matches) {
            closeSidebar();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navbar.classList.contains("show")) {
            closeSidebar(true);
        }
    });

    const updateNavbar = () => {
        if (mobileNav.matches) {
            if (!navbar.classList.contains("show")) {
                navbar.setAttribute("inert", "");
            }
        } else {
            closeSidebar();
        }
    };

    mobileNav.addEventListener("change", updateNavbar);
    updateNavbar();
}
