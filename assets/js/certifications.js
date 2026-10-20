const certificates = [
    {
        id: "dsdap-caravan-2024",
        title: "Digital Startup Development and Acceleration Program (DSDAP) Caravan",
        issuer: "DICT Region IV-A",
        completionDate: "2024-05-29",
        image: "images/certificates/dsdap-participation.png",
        thumbnail: "images/certificates/thumbnails/dsdap-participation.jpg",
    },
    {
        id: "egovph-super-app-orientation-2024",
        title: "eGOVPH Super App Orientation",
        issuer: "DICT Region IV-A",
        completionDate: "2024-05-29",
        image: "images/certificates/egovph-super-app-orientation.png",
        thumbnail: "images/certificates/thumbnails/egovph-super-app-orientation.jpg",
    },
    {
        id: "powerpoint-2019-associate",
        title: "Microsoft Office Specialist: PowerPoint 2019 Associate",
        issuer: "Microsoft",
        issueDate: "2024-05-30",
        credentialId: "5kuE-4wTh",
        verificationUrl: "https://www.certiport.com/portal/pages/credentialverification.aspx",
        image: "images/certificates/microsoft-powerpoint-2019-associate.png",
        thumbnail: "images/certificates/thumbnails/microsoft-powerpoint-2019-associate.jpg",
    },
    {
        id: "introduction-to-internet-of-things",
        title: "Introduction to Internet of Things",
        issuer: "Cisco Networking Academy",
        issueDate: "2026-08-29",
        credentialId: "97e68470-88ec-4a81-9cff-56f45c3bbafd",
        verificationUrl: "https://www.credly.com/badges/97e68470-88ec-4a81-9cff-56f45c3bbafd/public_url",
        image: "images/certificates/cisco-introduction-to-iot.png",
        thumbnail: "images/certificates/thumbnails/cisco-introduction-to-iot.jpg",
    },
    {
        id: "information-technology-specialist-databases",
        title: "Information Technology Specialist: Databases",
        issuer: "Certiport",
        issueDate: "2025-05-07",
        credentialId: "wqnpp-2FvB",
        verificationUrl: "https://www.certiport.com/portal/pages/credentialverification.aspx",
        image: "images/certificates/information-technology-specialist-databases.png",
        thumbnail: "images/certificates/thumbnails/information-technology-specialist-databases.jpg",
    },
    {
        id: "getting-started-cisco-packet-tracer",
        title: "Getting Started with Cisco Packet Tracer",
        issuer: "Cisco Networking Academy",
        completionDate: "2026-02-06",
        image: "images/certificates/cisco-getting-started-packet-tracer.png",
        thumbnail: "images/certificates/thumbnails/cisco-getting-started-packet-tracer.jpg",
    },
    {
        id: "ai-fundamentals-cisco",
        title: "AI Fundamentals: Language and Vision in AI",
        issuer: "Cisco Networking Academy in collaboration with IBM SkillsBuild",
        issueDate: "2026-09-14",
        credentialId: "2b791458-2cb6-4218-bec9-8be2343385c7",
        verificationUrl: "https://www.credly.com/badges/2b791458-2cb6-4218-bec9-8be2343385c7/public_url",
        image: "images/certificates/ibm-cisco-ai-fundamentals.png",
        thumbnail: "images/certificates/thumbnails/ibm-cisco-ai-fundamentals.jpg",
    },
    {
        id: "ai-fundamentals-ibm",
        title: "AI Fundamentals: Language and Vision in AI",
        issuer: "IBM SkillsBuild",
        issueDate: "2026-09-14",
        credentialId: "75008bc8-dfff-45ef-93f7-c6d66812335d",
        verificationUrl: "https://www.credly.com/go/NPGKE8Jf",
        image: "images/certificates/ibm-ai-fundamentals-credential.png",
        thumbnail: "images/certificates/thumbnails/ibm-ai-fundamentals-credential.jpg",
    },
    {
        id: "domini-xode-code-hunt-2nd-place",
        title: "2nd Place — Domini Xode's Code Hunt Event",
        issuer: "Domini Xode",
        description: "Certificate of recognition for winning 2nd place.",
        image: "images/certificates/domini-xode-code-hunt-2nd-place.jpg",
        thumbnail: "images/certificates/thumbnails/domini-xode-code-hunt-2nd-place.jpg",
    },
];

const gallery = document.getElementById("certificate-gallery");
const dialog = document.getElementById("certificate-dialog");

if (!gallery || !(dialog instanceof HTMLDialogElement)) {
    console.error("Certificate gallery could not initialize: required gallery or dialog element is missing.");
} else {
    const closeButton = document.getElementById("certificate-dialog-close");
    const titleElement = document.getElementById("certificate-dialog-title");
    const issuerElement = document.getElementById("certificate-dialog-issuer");
    const descriptionElement = document.getElementById("certificate-dialog-description");
    const imageElement = document.getElementById("certificate-dialog-image");
    const imageFallback = document.getElementById("certificate-dialog-fallback");
    const detailsElement = document.getElementById("certificate-dialog-details");
    const originalLink = document.getElementById("certificate-dialog-original");
    const downloadLink = document.getElementById("certificate-dialog-download");
    const verificationLink = document.getElementById("certificate-dialog-verification");
    let activeTrigger = null;
    let previousBodyOverflow = "";
    let closeTimer;

    const makeElement = (tagName, className, text) => {
        const element = document.createElement(tagName);
        if (className) {
            element.className = className;
        }
        if (text !== undefined) {
            element.textContent = text;
        }
        return element;
    };

    const formatDate = (date) => new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00Z`));

    const makeDetail = (label, value) => {
        const row = makeElement("div");
        row.append(makeElement("dt", "", label), makeElement("dd", "", value));
        return row;
    };

    const renderCertificateCard = (certificate) => {
        const card = makeElement("button", "certificate-card");
        card.type = "button";
        card.dataset.certificateId = certificate.id;
        card.setAttribute("aria-haspopup", "dialog");
        card.setAttribute("aria-controls", "certificate-dialog");
        card.setAttribute("aria-label", `View certificate: ${certificate.title}, issued by ${certificate.issuer}`);

        const preview = makeElement("span", "certificate-card__preview");
        const image = makeElement("img", "certificate-card__image");
        image.src = certificate.thumbnail || certificate.image;
        image.alt = `${certificate.title} certificate preview`;
        image.width = 640;
        image.height = 480;
        image.loading = "lazy";
        image.decoding = "async";
        const fallback = makeElement("span", "certificate-image-fallback", "Certificate preview unavailable.");
        fallback.hidden = true;
        preview.append(image, fallback);

        const content = makeElement("span", "certificate-card__content");
        content.append(
            makeElement("span", "certificate-card__title", certificate.title),
            makeElement("span", "certificate-card__issuer", certificate.issuer),
        );

        const dateValue = certificate.issueDate || certificate.completionDate;
        if (dateValue) {
            const dateLabel = certificate.issueDate ? "Issued" : "Completed";
            const date = makeElement("time", "certificate-card__date", `${dateLabel} ${formatDate(dateValue)}`);
            date.dateTime = dateValue;
            content.append(date);
        }

        const hint = makeElement("span", "certificate-card__hint", "View Certificate");
        hint.append(makeElement("span", "", "\u2197"));
        content.append(hint);
        card.append(preview, content);
        return card;
    };

    const renderGallery = () => {
        const fragment = document.createDocumentFragment();
        for (const certificate of certificates) {
            fragment.append(renderCertificateCard(certificate));
        }
        gallery.replaceChildren(fragment);
    };

    const populateDetails = (certificate) => {
        const details = [];
        const dateValue = certificate.issueDate || certificate.completionDate;
        if (dateValue) {
            details.push(makeDetail(certificate.issueDate ? "Issued" : "Completed", formatDate(dateValue)));
        }
        if (certificate.credentialId) {
            details.push(makeDetail(certificate.credentialLabel || "Credential ID", certificate.credentialId));
        }
        detailsElement.replaceChildren(...details);
    };

    const openCertificate = (certificate, trigger) => {
        activeTrigger = trigger;
        titleElement.textContent = certificate.title;
        issuerElement.textContent = certificate.issuer;
        descriptionElement.textContent = certificate.description || "";
        descriptionElement.hidden = !certificate.description;
        imageElement.alt = `${certificate.title} certificate issued by ${certificate.issuer}`;
        imageElement.hidden = true;
        imageFallback.hidden = true;
        imageElement.src = certificate.image;
        populateDetails(certificate);

        originalLink.href = certificate.image;
        downloadLink.href = certificate.image;
        downloadLink.download = certificate.image.split("/").pop();
        verificationLink.hidden = !certificate.verificationUrl;
        if (certificate.verificationUrl) {
            verificationLink.href = certificate.verificationUrl;
        } else {
            verificationLink.removeAttribute("href");
        }

        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialog.showModal();
        closeButton.focus();
    };

    const closeCertificate = () => {
        if (!dialog.open || dialog.classList.contains("is-closing")) {
            return;
        }
        dialog.classList.add("is-closing");
        const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 160;
        closeTimer = window.setTimeout(() => dialog.close(), delay);
    };

    gallery.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }
        const card = target.closest("[data-certificate-id]");
        const certificate = certificates.find((item) => item.id === card?.dataset.certificateId);
        if (card instanceof HTMLButtonElement && certificate) {
            openCertificate(certificate, card);
        }
    });

    gallery.addEventListener("error", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLImageElement) || !target.matches(".certificate-card__image")) {
            return;
        }
        target.hidden = true;
        target.nextElementSibling.hidden = false;
    }, true);

    imageElement.addEventListener("load", () => {
        imageElement.hidden = false;
        imageFallback.hidden = true;
    });
    imageElement.addEventListener("error", () => {
        imageElement.hidden = true;
        imageFallback.hidden = false;
    });

    closeButton.addEventListener("click", closeCertificate);
    dialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeCertificate();
    });
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            closeCertificate();
        }
    });
    dialog.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closeCertificate();
            return;
        }
        if (event.key !== "Tab") {
            return;
        }
        const focusableElements = [...dialog.querySelectorAll(
            'button:not([disabled]), a[href]:not([hidden])',
        )].filter((element) => element.getClientRects().length > 0);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) {
            event.preventDefault();
        } else if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    });
    dialog.addEventListener("close", () => {
        window.clearTimeout(closeTimer);
        dialog.classList.remove("is-closing");
        document.body.style.overflow = previousBodyOverflow;
        activeTrigger?.focus();
        activeTrigger = null;
    });

    renderGallery();
}
