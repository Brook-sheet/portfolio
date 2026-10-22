const projects = [
    {
        id: "rx-box",
        title: "Rx Box: AI Driven Smart Pillbox for Correct Medication Adherence with Predictive Behavior Analysis and Family Notification Support for Risk Prevention",
        cardTitle: "Rx Box",
        category: "Capstone Project / AI / IoT / Healthcare Technology",
        shortDescription: "An AI-driven smart pillbox system designed to support medication adherence among users with hypertension and diabetes through medication reminders, sensor-based monitoring, predictive behavior analysis, and family notifications.",
        description: "An AI-driven smart pillbox system designed to support medication adherence among users with hypertension and diabetes through medication reminders, sensor-based monitoring, predictive behavior analysis, and family notifications for potential adherence risks.",
        objectives: [
            "Develop a smart pillbox with an ESP32 microcontroller and compartment-level sensors for medication access monitoring.",
            "Analyze medication-taking behavior using supervised machine learning and classify adherence risk as Low, Moderate, or High.",
            "Provide medication reminders and monitoring through mobile and web applications.",
            "Support family monitoring and notifications for potential medication adherence risks.",
            "Evaluate the prototype through controlled system testing.",
        ],
        technologies: [
            "ESP32 microcontroller",
            "Internet of Things (IoT)",
            "MongoDB",
            "Next.js",
            "Supervised Machine Learning",
            "Random Forest classification",
            "Compartment-level sensors",
            "Buzzer and LED indicators",
            "Wi-Fi connectivity",
        ],
        cardTechnologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
        technologyGroups: [
            {
                category: "Frontend Development",
                items: ["Next.js", "TypeScript", "Tailwind CSS"],
            },
            {
                category: "Backend & Database",
                items: ["MongoDB", "Node.js"],
            },
            {
                category: "Hardware & IoT",
                items: ["ESP32 microcontroller", "Compartment-level sensors", "Buzzer and LED indicators", "Wi-Fi connectivity"],
            },
            {
                category: "AI & Machine Learning",
                items: ["Supervised Machine Learning", "Random Forest classification"],
            },
        ],
        teamMembers: [
            "Vincent Ace C. Fronteras",
            "John Carl E. Layosa",
            "Kristine Mae B. Montajas",
            "Asher Daniel M. Tibayan",
        ],
        role: "Front-end",
        status: "Ongoing",
        repositoryUrl: "https://github.com/Brook-sheet/med-reminder-web-app",
        demoUrl: "https://med-reminder-web-app.vercel.app/sign-in?from=%2F",
    },
    {
        id: "sdcanteen",
        title: "SDCanteen",
        category: "Mobile application",
        shortDescription: "A mobile application designed to improve efficiency in handling orders and tracking supplies.",
        description: "A mobile application designed to improve efficiency in handling orders and tracking supplies.",
        objectives: [
            "Develop a mobile application to support canteen order handling and supply tracking.",
            "Make it easier for users to manage order and supply information in one place.",
            "Provide a clear, user-friendly interface for the app's intended workflows.",
            "Evaluate the app's usability and effectiveness in supporting order handling and supply tracking.",
        ],
        technologies: ["Android Studio", "XML", "Java", "Firebase"],
        cardTechnologies: ["Java", "Android Studio", "Firebase", "XML"],
        technologyGroups: [
            {
                category: "Mobile Development",
                items: ["Android Studio", "XML", "Java"],
            },
            {
                category: "Backend & Database",
                items: ["Firebase"],
            },
        ],
        teamMembers: [
            "Vincent Ace C. Fronteras",
            "Jereeza Mae T. Mayuga",
            "Paul Andrei F. Cielo",
            "John Almer D. Goco",
        ],
        role: "Frontend",
        status: "Completed",
        repositoryUrl: "https://github.com/jereeza-mae-mayuga/SDCAnteen.git",
    },
    {
        id: "smart-medication-reminder",
        title: "Smart Medication Reminder System with Sensor-Based Intake Monitoring",
        cardTitle: "Smart Medication Reminder",
        category: "IoT / Healthcare Technology",
        shortDescription: "An IoT-based medication reminder with an ESP32 and limit switch for intake monitoring, local alerts, snooze reminders, event logging, and dashboard monitoring.",
        description: "An IoT-based project designed to help users manage their medication schedules through automated reminders and sensor-based monitoring. The system uses an ESP32 and a limit switch to detect when the medicine container is opened. It provides buzzer and LED alerts, supports snooze reminders, records taken or missed medication events, and sends data to a backend server for monitoring through a dashboard.",
        objectives: [
            "Develop a smart medicine reminder device that provides scheduled medication alerts.",
            "Monitor and record medication activity in real time.",
            "Enable remote monitoring of medication records through an online dashboard.",
            "Help users and caregivers monitor medication schedules and missed doses.",
        ],
        technologies: [
            "ESP32",
            "Limit switch",
            "Buzzer",
            "LED",
            "Breadboard",
            "Jumper wires",
            "Resistors",
            "Power supply",
            "Arduino IDE",
            "Node.js",
            "MongoDB",
            "Next.js",
            "JavaScript",
            "Wi-Fi",
            "HTTP",
            "JSON",
            "Network Time Protocol (NTP)",
        ],
        cardTechnologies: ["ESP32", "Next.js", "Node.js", "MongoDB", "JavaScript"],
        technologyGroups: [
            {
                category: "Frontend Development",
                items: ["Next.js", "JavaScript"],
            },
            {
                category: "Backend & Database",
                items: ["Node.js", "MongoDB"],
            },
            {
                category: "Hardware & IoT",
                items: ["ESP32", "Limit switch", "Buzzer", "LED", "Wi-Fi"],
            },
            {
                category: "Tools & Development Environment",
                items: ["Arduino IDE"],
            },
            {
                category: "Communication & Protocols",
                items: ["HTTP", "JSON", "Network Time Protocol (NTP)"],
            },
        ],
        teamMembers: [
            "Vincent Ace C. Fronteras",
            "John Carl E. Layosa",
            "Kristine Mae B. Montajas",
            "Asher Daniel M. Tibayan",
        ],
        role: "Frontend",
        status: "Completed",
    },
    {
        id: "ai-smart-trash-bin",
        title: "AI-Enabled Smart Trash Bin: Automatic Waste Classification and Proper Segregation",
        cardTitle: "AI-Enabled Smart Trash Bin",
        category: "Academic Capstone Project / AI / IoT / Sustainability",
        shortDescription: "An AI-powered smart trash bin that classifies waste as biodegradable, non-biodegradable, or recyclable, opens the correct compartment, and alerts maintenance staff when bins are full.",
        description: "An AI-powered smart trash bin designed to automatically identify and segregate waste into biodegradable, non-biodegradable, and recyclable categories. It also monitors bin fill levels and sends alerts to maintenance staff when bins are full.",
        objectives: [
            "Automatically classify waste using AI image recognition.",
            "Open the correct bin compartment using a servo motor.",
            "Monitor waste levels using sensors and notify maintenance staff when bins are full.",
            "Promote proper waste segregation and environmental awareness.",
        ],
        technologies: [
            "AI image classification",
            "Convolutional Neural Network (CNN)",
            "MobileNetV2",
            "ESP32",
            "ESP32-CAM",
            "Ultrasonic sensors",
            "Servo motors",
            "Firebase Realtime Database",
            "Node.js",
            "MongoDB",
            "Dart",
        ],
        cardTechnologies: ["MobileNetV2", "ESP32-CAM", "Firebase Realtime Database", "Node.js", "MongoDB"],
        technologyGroups: [
            {
                category: "AI & Machine Learning",
                items: ["AI image classification", "Convolutional Neural Network (CNN)", "MobileNetV2"],
            },
            {
                category: "Hardware & IoT",
                items: ["ESP32", "ESP32-CAM", "Ultrasonic sensors", "Servo motors"],
            },
            {
                category: "Backend & Database",
                items: ["Firebase Realtime Database", "Node.js", "MongoDB"],
            },
            {
                category: "Programming Language",
                items: ["Dart"],
            },
        ],
        teamMembers: [
            "Vincent Ace C. Fronteras",
            "John Carl E. Layosa",
            "Kristine Mae B. Montajas",
            "Asher Daniel M. Tibayan",
        ],
        role: "Front-end",
        status: "Completed",
        repositoryUrl: "https://github.com/Kmontajas/Smart-Trash-Bin.git",
    },
];

const projectGrid = document.getElementById("project-grid");
const projectDialog = document.getElementById("project-dialog");
const projectDialogTitle = document.getElementById("project-dialog-title");
const projectDialogCategory = document.getElementById("project-dialog-category");
const projectDialogStatus = document.getElementById("project-dialog-status");
const projectDialogDescription = document.getElementById("project-dialog-description");
const projectDialogSections = document.getElementById("project-dialog-sections");
const projectDialogActions = document.getElementById("project-dialog-actions");
const projectDialogClose = document.getElementById("project-dialog-close");

if (
    projectGrid &&
    projectDialog instanceof HTMLDialogElement &&
    projectDialogTitle &&
    projectDialogCategory &&
    projectDialogStatus &&
    projectDialogDescription &&
    projectDialogSections &&
    projectDialogActions &&
    projectDialogClose
) {
    let activeTrigger = null;
    let previousBodyOverflow = "";
    let closeTimer;

    const createElement = (tagName, className, text) => {
        const element = document.createElement(tagName);
        if (className) {
            element.className = className;
        }
        if (text) {
            element.textContent = text;
        }
        return element;
    };

    const appendListSection = (container, title, items, listTag = "ul") => {
        if (!Array.isArray(items) || items.length === 0) {
            return;
        }

        const section = createElement("section", "project-dialog__section");
        const heading = createElement("h3", "", title);
        const list = document.createElement(listTag);
        list.className = title === "Technologies used"
            ? "project-tags project-dialog__tags"
            : "project-dialog__list";

        for (const item of items) {
            list.append(createElement("li", "", item));
        }

        section.append(heading, list);
        container.append(section);
    };

    const appendTechnologyGroups = (container, groups) => {
        if (!Array.isArray(groups)) {
            return;
        }

        for (const group of groups) {
            if (!group.category || !Array.isArray(group.items) || group.items.length === 0) {
                continue;
            }

            const section = createElement("section", "project-dialog__section");
            const heading = createElement("h3", "", group.category);
            const tags = createElement("ul", "project-tags project-dialog__tags");
            for (const technology of group.items) {
                tags.append(createElement("li", "", technology));
            }
            section.append(heading, tags);
            container.append(section);
        }
    };

    const appendRoleSection = (container, project) => {
        if (!project.role) {
            return;
        }

        const section = createElement("section", "project-dialog__section");
        section.append(
            createElement("h3", "", "My Role"),
            createElement("p", "project-dialog__role", project.role),
        );
        container.append(section);
    };

    const appendAction = (label, url) => {
        if (!url) {
            return;
        }

        const link = createElement("a", "project-dialog__link", label);
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        projectDialogActions.append(link);
    };

    const renderProjectCard = (project) => {
        const article = createElement("article", "project-card");
        article.setAttribute("role", "listitem");

        const trigger = createElement("button", "project-card__trigger");
        trigger.type = "button";
        trigger.dataset.projectId = project.id;
        trigger.setAttribute("aria-haspopup", "dialog");
        trigger.setAttribute("aria-controls", projectDialog.id);
        trigger.setAttribute(
            "aria-label",
            `View details for ${project.cardTitle || project.title}`,
        );

        if (project.image) {
            const imageWrap = createElement("div", "project-card__image-wrap");
            const image = document.createElement("img");
            image.className = "project-card__image";
            image.src = project.image;
            image.alt = project.imageAlt || project.cardTitle || project.title;
            image.loading = "lazy";
            image.decoding = "async";
            image.addEventListener("error", () => imageWrap.remove(), { once: true });
            imageWrap.append(image);
            trigger.append(imageWrap);
        }

        const meta = createElement("div", "project-card__meta");
        if (project.category) {
            meta.append(createElement("p", "project-card__category", project.category));
        }
        if (project.status) {
            meta.append(createElement("span", "project-status", project.status));
        }

        const title = createElement("h2", "project-card__title", project.cardTitle || project.title);
        const description = createElement(
            "p",
            "project-card__description",
            project.shortDescription || project.description,
        );
        trigger.append(meta, title, description);

        if (Array.isArray(project.cardTechnologies) && project.cardTechnologies.length > 0) {
            const tags = createElement("ul", "project-tags");
            for (const technology of project.cardTechnologies) {
                tags.append(createElement("li", "", technology));
            }
            trigger.append(tags);
        }

        const action = createElement("span", "project-card__action", "View details");
        action.append(createElement("i", "fa-solid fa-arrow-right"));
        action.lastElementChild.setAttribute("aria-hidden", "true");
        trigger.append(action);
        article.append(trigger);
        return article;
    };

    const renderProjects = () => {
        const ids = new Set();
        const fragment = document.createDocumentFragment();
        for (const project of projects) {
            if (!project.id || ids.has(project.id)) {
                throw new Error(`Project IDs must be present and unique: ${project.id || "(missing)"}`);
            }
            ids.add(project.id);
            fragment.append(renderProjectCard(project));
        }
        projectGrid.append(fragment);
    };

    const renderProjectDetails = (project) => {
        projectDialogTitle.textContent = project.title;
        projectDialogCategory.textContent = project.category || "";
        projectDialogCategory.hidden = !project.category;
        projectDialogStatus.textContent = project.status || "";
        projectDialogStatus.hidden = !project.status;
        projectDialogDescription.textContent = project.description || project.shortDescription || "";
        projectDialogSections.replaceChildren();
        projectDialogActions.replaceChildren();

        appendListSection(projectDialogSections, "Objectives", project.objectives, "ol");
        appendTechnologyGroups(projectDialogSections, project.technologyGroups);
        appendListSection(projectDialogSections, "Team members", project.teamMembers);
        appendRoleSection(projectDialogSections, project);

        appendAction("Repository", project.repositoryUrl);
        appendAction("Live demo", project.demoUrl);
        projectDialogActions.hidden = projectDialogActions.childElementCount === 0;
    };

    const openProject = (project, trigger) => {
        if (projectDialog.open) {
            return;
        }

        activeTrigger = trigger;
        renderProjectDetails(project);
        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        projectDialog.showModal();
        projectDialogClose.focus();
    };

    const closeProject = () => {
        if (!projectDialog.open || projectDialog.classList.contains("is-closing")) {
            return;
        }

        projectDialog.classList.add("is-closing");
        const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 160;
        closeTimer = window.setTimeout(() => projectDialog.close(), delay);
    };

    projectGrid.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }

        const trigger = target.closest("button[data-project-id]");
        if (!(trigger instanceof HTMLButtonElement)) {
            return;
        }
        const project = projects.find((item) => item.id === trigger.dataset.projectId);
        if (project) {
            openProject(project, trigger);
        }
    });

    projectDialogClose.addEventListener("click", closeProject);
    projectDialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeProject();
    });
    projectDialog.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closeProject();
        }
    });
    projectDialog.addEventListener("click", (event) => {
        if (event.target === projectDialog) {
            closeProject();
        }
    });
    projectDialog.addEventListener("close", () => {
        window.clearTimeout(closeTimer);
        projectDialog.classList.remove("is-closing");
        document.body.style.overflow = previousBodyOverflow;
        activeTrigger?.focus();
        activeTrigger = null;
    });

    renderProjects();
}
