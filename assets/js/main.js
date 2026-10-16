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
    const sectionLinks = [...navbar.querySelectorAll('a[href^="#"]')];
    const sections = sectionLinks
        .map((link) => document.getElementById(link.hash.slice(1)))
        .filter((section) => section instanceof HTMLElement);
    let activeSectionId = navbar.querySelector('[aria-current="location"]')?.hash.slice(1);

    const setActiveSection = (id) => {
        if (!id || id === activeSectionId) {
            return;
        }

        activeSectionId = id;
        for (const link of sectionLinks) {
            if (link.hash === `#${id}`) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        }
    };

    if (sections.length > 0 && "IntersectionObserver" in window) {
        const pageEndSection = sections[sections.length - 1];
        const pageEndSentinel = document.getElementById("page-end-sentinel");
        let sectionObserver;
        const intersectingSections = new Set();

        const observeSections = () => {
            sectionObserver?.disconnect();
            intersectingSections.clear();
            const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
            const bottomOffset = Math.round(window.innerHeight * 0.55);

            sectionObserver = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        intersectingSections.add(entry.target);
                    } else {
                        intersectingSections.delete(entry.target);
                    }
                }

                const nextSection = sections
                    .filter((section) => intersectingSections.has(section))
                    .sort(
                        (first, second) =>
                            Math.abs(first.getBoundingClientRect().top - headerHeight) -
                            Math.abs(second.getBoundingClientRect().top - headerHeight),
                    )[0];

                if (nextSection) {
                    setActiveSection(nextSection.id);
                }
            }, {
                rootMargin: `-${headerHeight}px 0px -${bottomOffset}px 0px`,
            });

            for (const section of sections) {
                sectionObserver.observe(section);
            }
        };

        observeSections();
        window.addEventListener("resize", observeSections, { passive: true });

        if (pageEndSentinel) {
            const pageEndObserver = new IntersectionObserver((entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setActiveSection(pageEndSection.id);
                }
            });
            pageEndObserver.observe(pageEndSentinel);
        }
    }

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
        const focusDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 50;
        window.setTimeout(() => {
            if (navbar.classList.contains("show")) {
                closeButton.focus();
            }
        }, focusDelay);
    };

    openButton.addEventListener("click", openSidebar);
    closeButton.addEventListener("click", () => closeSidebar(true));
    overlay.addEventListener("click", () => closeSidebar());
    navbar.addEventListener("click", (event) => {
        const link = event.target instanceof Element
            ? event.target.closest("a[href]")
            : null;

        if (!link) {
            return;
        }

        const destination = new URL(link.href, window.location.href);
        const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
        const destinationPath = destination.pathname.replace(/\/+$/, "") || "/";
        const destinationSectionId = destination.hash.slice(1);
        const isSectionDestination = sections.some(
            (section) => section.id === destinationSectionId,
        );
        const isActiveSection =
            destination.origin === window.location.origin &&
            destinationPath === currentPath &&
            isSectionDestination &&
            destinationSectionId === activeSectionId;
        const isSameDestination =
            destination.origin === window.location.origin &&
            destinationPath === currentPath &&
            destination.search === window.location.search &&
            destination.hash === window.location.hash;
        const hasNavigationModifier =
            event.button !== 0 ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey;

        const shouldPreventNavigation = isSectionDestination
            ? isActiveSection
            : isSameDestination;

        if (
            shouldPreventNavigation &&
            !hasNavigationModifier &&
            (!link.target || link.target === "_self") &&
            !link.hasAttribute("download")
        ) {
            event.preventDefault();
        }

        if (
            isSectionDestination &&
            destination.origin === window.location.origin &&
            destinationPath === currentPath
        ) {
            setActiveSection(destinationSectionId);
        }

        if (mobileNav.matches) {
            closeSidebar();

            if (
                isSectionDestination &&
                destination.origin === window.location.origin &&
                destinationPath === currentPath
            ) {
                document.getElementById(destinationSectionId)?.focus({ preventScroll: true });
            }
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navbar.classList.contains("show")) {
            closeSidebar(true);
            return;
        }

        if (event.key === "Tab" && mobileNav.matches && navbar.classList.contains("show")) {
            const focusableItems = navbar.querySelectorAll('a[href], button:not([disabled])');
            const firstItem = focusableItems[0];
            const lastItem = focusableItems[focusableItems.length - 1];

            if (event.shiftKey && document.activeElement === firstItem) {
                event.preventDefault();
                lastItem.focus();
            } else if (!event.shiftKey && document.activeElement === lastItem) {
                event.preventDefault();
                firstItem.focus();
            }
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
