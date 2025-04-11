document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Get current theme from localStorage or system preference
    let currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateToggleIcon(currentTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateToggleIcon(currentTheme);
    });

    // Update the toggle icon based on current theme
    function updateToggleIcon(theme) {
        const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';
        themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
    }

    // Navbar scroll effect with enhanced behavior
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll indicator functionality
    const scrollIndicators = document.querySelectorAll('.scroll-indicator');
    scrollIndicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const currentSection = this.closest('section');
            const nextSection = currentSection.nextElementSibling;
            
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    // Apply animation classes to elements
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        appearOnScroll.observe(element);
    });
    
    // Highlight active section in navbar
    const observerOptions = {
        rootMargin: `-${navbar.offsetHeight}px 0px 0px 0px`,
        threshold: 0.2
    };
    
    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections for navbar highlighting
    sections.forEach(section => {
        navObserver.observe(section);
    });
    
    // Enhanced navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.setAttribute('data-scroll', window.scrollY > 50 ? 'scrolled' : '');
        });
    }
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }
});
