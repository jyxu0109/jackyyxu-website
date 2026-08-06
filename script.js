/* ========================================
   Scroll reveal
======================================== */

document.addEventListener("DOMContentLoaded", () => {
    const revealSelector = [
        ".content-section .section-label",
        ".content-section h2",
        ".content-section .section-description",
        ".content-section .preview-description",
        ".content-section .preview-columns",
        ".content-section .preview-highlights",
        ".content-section .read-more-link",
        ".content-section .email-link",

        ".about-story > *",
        ".about-fact",
        ".about-explore-card",

        ".performance-intro-grid > *",
        ".experience-heading > *",
        ".experience-column",
        ".featured-project-heading > *",
        ".featured-project-grid > *",
        ".approach-grid > *",

        ".philosophy-grid > *",
        ".where-heading > *",
        ".teaching-place-card",
        ".areas-heading > *",
        ".area-card",
        ".student-development-grid > *",
        ".teaching-beyond-heading > *",
        ".teaching-beyond-content",

        ".ai-why-grid > *",
        ".ai-product-heading > *",
        ".ai-product-grid > *",
        ".ai-capabilities-heading > *",
        ".capability-card",
        ".principle",
        ".ai-roadmap-heading > *",
        ".roadmap-item",

        ".contact-details-grid > *",
        ".inquiries-heading > *",
        ".inquiry-card",
        ".contact-method",
        ".contact-direct > *"
    ].join(", ");

    const revealElements = document.querySelectorAll(revealSelector);

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => {
            element.classList.add("scroll-reveal", "is-visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -25px 0px"
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("scroll-reveal");

        /*
         * Delay is calculated only among nearby siblings.
         * It does not grow continuously throughout the whole page.
         */
        const parent = element.parentElement;

        if (parent) {
            const siblings = Array.from(parent.children).filter((child) =>
                child.matches(
                    ".section-label, h2, .section-description, " +
                    ".preview-description, .preview-columns, " +
                    ".preview-highlights, .read-more-link, .email-link, " +
                    ".about-fact, .about-explore-card, " +
                    ".experience-column, .teaching-place-card, " +
                    ".area-card, .capability-card, .principle, " +
                    ".roadmap-item, .inquiry-card, .contact-method"
                )
            );

            const position = siblings.indexOf(element);
            const safePosition = Math.max(0, Math.min(position, 4));

            element.style.setProperty(
                "--reveal-delay",
                `${safePosition * 0.09}s`
            );
        }

        observer.observe(element);
    });
});