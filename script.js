document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling to sections
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        navbar.style.background = window.scrollY > 50 ? "rgba(10, 10, 10, 0.9)" : "rgba(10, 10, 10, 0.95)";
    });

    // GSAP Animations
    gsap.from("nav", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from("#home h2", { duration: 1.5, x: -100, opacity: 0, ease: "power2.inOut" });
    gsap.from("#home p", { duration: 1.5, x: 100, opacity: 0, ease: "power2.inOut", delay: 0.5 });

    // Fade-in effect when scrolling
    const sections = document.querySelectorAll(".section-container");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        gsap.set(section, { opacity: 0, y: 50 });
        observer.observe(section);
    });

    // Social Media Icon Animation
    document.querySelectorAll(".social-links a").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, { scale: 1.3, rotate: 10, duration: 0.3, ease: "power1.out" });
        });
        icon.addEventListener("mouseleave", () => {
            gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power1.out" });
        });
    });
});
