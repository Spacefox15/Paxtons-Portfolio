const description = document.querySelector('.project-card-description');

description.addEventListener('mouseenter', () => {
    description.classList.add('project-card-description-is-scrolling');
    console.log("Mouse entered!");
}, { once: true });