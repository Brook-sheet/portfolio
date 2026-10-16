const pageName = window.location.pathname.split("/").pop() || "index.html";
const entranceIdsByPage = {
    "index.html": [
        "home-portrait",
        "home-copy",
        "about-intro",
        "about-next",
        "project-summary",
    ],
    "about-me.html": ["about-intro", "about-next"],
    "project.html": ["project-summary"],
};
const pageEntranceIds = entranceIdsByPage[pageName] || [];
const pagePath = window.location.pathname.replace(/\/+$/, "") || "/index.html";
const animationStoragePrefix = `portfolio-entrance:${pagePath}:`;
const navigationEntries = performance.getEntriesByType("navigation");

if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
    for (const id of pageEntranceIds) {
        sessionStorage.removeItem(animationStoragePrefix + id);
    }
}

const completedEntranceIds = pageEntranceIds.filter(
    (id) => sessionStorage.getItem(animationStoragePrefix + id) === "complete",
);

if (completedEntranceIds.length > 0) {
    document.documentElement.dataset.completedEntrances = completedEntranceIds.join(" ");
}

document.addEventListener("animationend", (event) => {
    const element = event.target;

    if (!(element instanceof HTMLElement)) {
        return;
    }

    const id = element.dataset.entranceId;
    if (id && pageEntranceIds.includes(id)) {
        sessionStorage.setItem(animationStoragePrefix + id, "complete");
    }
});
