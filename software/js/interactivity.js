function showSlide(dot, index) {
    const member = dot.closest('.member');
    const slides = member.querySelectorAll('.slide');
    const dots = member.querySelectorAll('.dot');

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
    });
}