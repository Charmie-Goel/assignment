// Hover effect for button
const button = document.querySelector('.hero-button');
button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
});
button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
});

// Mouse movement effect (parallax)
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX) / 100;
    const y = (window.innerHeight - e.pageY) / 100;
    const heroImage = document.querySelector('.hero-image img');
    heroImage.style.transform = `translate(${x}px, ${y}px)`;
});