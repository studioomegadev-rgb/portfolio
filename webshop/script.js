
    
    // Slider functionality
    const slider = document.getElementById('slider');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');
    const sliderDots = document.getElementById('sliderDots');
    
    if (slider) {
        let currentSlide = 0;
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const dots = sliderDots ? sliderDots.querySelectorAll('.slider-dot') : [];
        
        // Function to show specific slide
        function showSlide(slideIndex) {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current slide and dot
            if (slides[slideIndex]) {
                slides[slideIndex].classList.add('active');
            }
            if (dots[slideIndex]) {
                dots[slideIndex].classList.add('active');
            }
            
            // Move slider
            slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        }
        
        // Next slide function
        function nextSlideFunc() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Previous slide function
        function prevSlideFunc() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Event listeners for navigation arrows
        if (nextSlide) {
            nextSlide.addEventListener('click', nextSlideFunc);
        }
        
        if (prevSlide) {
            prevSlide.addEventListener('click', prevSlideFunc);
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // Auto-play slider
        let autoSlideInterval = setInterval(nextSlideFunc, 5000);
        
        // Pause auto-play on hover
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(autoSlideInterval);
            });
            
            sliderContainer.addEventListener('mouseleave', () => {
                autoSlideInterval = setInterval(nextSlideFunc, 5000);
            });
        }
        
        // Initialize first slide
        showSlide(0);
    }
    
    // Gallery lazy loading and fade-in animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Intersection Observer for gallery animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    galleryItems.forEach(item => {
        observer.observe(item);
    });
   