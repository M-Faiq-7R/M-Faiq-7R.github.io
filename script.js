// ========================================
// SELECT ELEMENTS
// ========================================

const header = document.querySelector("header");
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-links a");
const backToTop = document.getElementById("backToTop");

// ========================================
// UPDATE UI ON SCROLL
// ========================================

function updateOnScroll() {

    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Back-to-top button
    if (scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

    // Active navigation link
    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link =>
                link.classList.remove("active")
            );

            document
                .querySelector(`.nav-links a[href="#${id}"]`)
                ?.classList.add("active");
        }

    });

}

// ========================================
// BACK TO TOP
// ========================================

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ========================================
// INITIALIZE
// ========================================

window.addEventListener("scroll", updateOnScroll);

updateOnScroll();