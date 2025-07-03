// 轮播图脚本（含左右箭头切换）
// 轮播图脚本（含左右箭头切换）
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
const leftArrow = document.getElementById('hero-arrow-left');
const rightArrow = document.getElementById('hero-arrow-right');
let current = 0;
let timer = null;

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
        slide.style.opacity = i === idx ? '1' : '0';
        slide.style.zIndex = i === idx ? '2' : '1';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
    });
    current = idx;
}

function nextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    let prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function startAuto() {
    timer = setInterval(nextSlide, 5000);
}

function stopAuto() {
    clearInterval(timer);
}

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        stopAuto();
        showSlide(idx);
        startAuto();
    });
});

if (leftArrow && rightArrow) {
    leftArrow.addEventListener('click', () => {
        stopAuto();
        prevSlide();
        startAuto();
    });
    rightArrow.addEventListener('click', () => {
        stopAuto();
        nextSlide();
        startAuto();
    });
}

// 初始化
showSlide(0);
startAuto();
