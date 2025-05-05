// Add a keyframe animation to fade in the body on scroll
document.addEventListener('DOMContentLoaded', () => {
    const fadeInBody = () => {
        if (window.scrollY > 0) {
            document.body.classList.add('fade-in');
            window.removeEventListener('scroll', fadeInBody);
        }
    };

    window.addEventListener('scroll', fadeInBody);
});