document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        once: true
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-wrapper')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current page in navigation
    const currentPage = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add animation to program cards
    document.querySelectorAll('.program-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Get all navigation links
    const navLinksAll = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    // Function to update active navigation link
    function updateActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Smooth scroll for navigation links
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Initial call to set active link
    updateActiveLink();

    // Parallax Effect
    const parallaxBackground = document.querySelector('.parallax-background');
    const floatingElements = document.querySelectorAll('.float-item');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        if (parallaxBackground) {
            parallaxBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        floatingElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Scroll Animation Observer
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) * (1 - offset)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 0.25)) {
                displayScrollElement(el);
            }
        });
    };

    // Throttle function for better performance
    let throttleTimer;
    const throttle = (callback, time) => {
        if (throttleTimer) return;
        throttleTimer = true;
        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    };

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        throttle(handleScrollAnimation, 250);
    });

    // Initial check for elements in view
    handleScrollAnimation();
}); 