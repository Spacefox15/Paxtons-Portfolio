document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav_toggle");
    const navbar = document.querySelector(".navbar");

    if (!toggle || !navbar) return;

    toggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("open");
        toggle.classList.toggle("open", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
    });
});
