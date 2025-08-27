// navbar code start 
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');
const collapsibles = document.querySelectorAll('.collapsible');

const navbar = document.querySelector('.nav-bar');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
         logo.src = './assets/imgs/nav_logo.png'; // Change logo
    } else {
        navbar.classList.remove('scrolled');
         logo.src = './assets/imgs/logo_nav.png'; // Change logo
    }
});

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close menu on window resize if greater than 991px
window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        mobileMenu.classList.remove('active');
    }
});

// Toggle collapsible menus (only one open at a time)
collapsibles.forEach(item => {
    const header = item.querySelector('.collapsible-header');
    const icon = header ? header.querySelector('.icon-drop') : null;

    if (header) {
        header.addEventListener('click', () => {
            // Close all others first
            collapsibles.forEach(other => {
                if (other !== item) {
                    other.classList.remove('open');
                    const otherIcon = other.querySelector('.collapsible-header>img');
                    if (otherIcon) {
                        otherIcon.src = './assets/icons/down.svg';
                    }
                }
            });

            // Toggle current one
            item.classList.toggle('open');

            if (item.classList.contains('open')) {
                if (icon) icon.src = './assets/icons/down.svg';
            } else {
                if (icon) icon.src = './assets/icons/down.svg';
            }
        });
    }
});


// navbar code end

// slider code start
$(document).ready(function () {
    // Initialize carousel
    $(".product-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3777000,
        navText: [
            "<span class='owl-prev-custom'><img src='./assets/icons/chevron-left.svg'/></span>",
            "<span class='owl-next-custom'><img src='./assets/icons/chevron-right.svg'/></span>"
        ]
    });

    // Tabs switching
    $(".tab-btn").click(function () {
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").addClass("d-none").removeClass("active");
        $($(this).data("target")).removeClass("d-none").addClass("active");
    });
});
$(document).ready(function () {
    $(".testimonial-section .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
            "<span class='owl-prev-custom'><img src='./assets/icons/chevron-left.svg'/></span>",
            "<span class='owl-next-custom'><img src='./assets/icons/chevron-right.svg'/></span>"
        ],   // customize arrow icons
        responsive: {
            0: { items: 1 },    // 1 card on mobile
            768: { items: 2 },  // 2 cards on tablets
            992: { items: 3 }   // 3 cards on desktops
        }
    });

});
$('.blog_slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    center: true,
    items: 1,
    stagePadding: ($(window).width() * 0.15), // 15% each side for half cards
    responsive: {
        0: {
            items: 1,
            stagePadding: 50
        },
        768: {
            items: 1,
            stagePadding: $(window).width() * 0.1
        },
        1200: {
            items: 1,
            stagePadding: $(window).width() * 0.15
        }
    },
    navText: [
        "<span class='owl-prev-custom'><img src='./assets/icons/chevron-left.svg'/></span>",
        "<span class='owl-next-custom'><img src='./assets/icons/chevron-right.svg'/></span>"
    ],
});


// slider code end
