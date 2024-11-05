document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.wp-block-create-block-image-slider .wp-block-create-block-image-slider__slider');

    sliders.forEach(slider => {
        const wrapper = slider.querySelector('.wp-block-create-block-image-slider__wrapper');
        const slides = slider.querySelectorAll('.wp-block-create-block-image-slider__slide');
        const prevButton = slider.querySelector('.wp-block-create-block-image-slider__controls-button--prev');
        const nextButton = slider.querySelector('.wp-block-create-block-image-slider__controls-button--next');
        const dots = slider.querySelectorAll('.wp-block-create-block-image-slider__pagination-dot');
        
        let currentSlide = 0;
        let autoplayInterval;
        const slideCount = slides.length;
        const animationDuration = parseFloat(slider.dataset.animationDuration) || 5;
        const imagesToShow = parseInt(slider.dataset.imagesToShow) || 1;

        // Set initial styles
        slides.forEach(slide => {
            slide.style.flex = `0 0 ${100 / imagesToShow}%`;
        });
        wrapper.style.width = `${(slideCount / imagesToShow) * 100}%`;

        // Initialize
        updateSlider();
        startAutoplay();

        // Event listeners
        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index * imagesToShow;
                updateSlider();
            });
        });

        slider.addEventListener('mouseenter', stopAutoplay);
        slider.addEventListener('mouseleave', startAutoplay);

        // Touch support
        let touchStartX = 0;
        let touchEndX = 0;

        slider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left
                    currentSlide = Math.min(currentSlide + imagesToShow, slideCount - imagesToShow);
                } else {
                    // Swipe right
                    currentSlide = Math.max(currentSlide - imagesToShow, 0);
                }
                updateSlider();
            }
        }

        function updateSlider() {
            const offset = -(currentSlide * (100 / slideCount));
            wrapper.style.transform = `translateX(${offset}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                const isActive = index * imagesToShow <= currentSlide && currentSlide < (index + 1) * imagesToShow;
                dot.classList.toggle('active', isActive);
                dot.setAttribute('aria-current', isActive ? 'true' : 'false');
            });

            // Update button states
            prevButton.disabled = currentSlide === 0;
            nextButton.disabled = currentSlide >= slideCount - imagesToShow;
        }

        function startAutoplay() {
            stopAutoplay();
            autoplayInterval = setInterval(() => {
                if (currentSlide < slideCount - imagesToShow) {
                    currentSlide++;
                } else {
                    currentSlide = 0;
                }
                updateSlider();
            }, animationDuration * 1000);
        }

        function stopAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
            }
        }
    });
});