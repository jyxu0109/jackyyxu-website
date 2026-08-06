/* ========================================
   Homepage scroll reveal
======================================== */

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(
        ".content-section .section-label, " +
        ".content-section h2, " +
        ".content-section .section-description, " +
        ".content-section .preview-description, " +
        ".content-section .preview-columns, " +
        ".content-section .preview-highlights, " +
        ".content-section .experience-columns, " +
        ".content-section .read-more-link, " +
        ".content-section .email-link"
    );

    if (!revealElements.length) {
        return;
    }

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -60px 0px"
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("scroll-reveal");

        const section = element.closest(".content-section");

        if (section) {
            const sectionElements = Array.from(
                section.querySelectorAll(
                    ".section-label, " +
                    "h2, " +
                    ".section-description, " +
                    ".preview-description, " +
                    ".preview-columns, " +
                    ".preview-highlights, " +
                    ".experience-columns, " +
                    ".read-more-link, " +
                    ".email-link"
                )
            );

            const position = sectionElements.indexOf(element);

            element.style.setProperty(
                "--reveal-delay",
                `${Math.max(position, 0) * 0.12}s`
            );
        }

        revealObserver.observe(element);
    });
});