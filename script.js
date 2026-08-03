const header = document.querySelector(".site-header");

function updateHeader() {
    if (!header) {
        return;
    }

    header.classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateHeader);
updateHeader();