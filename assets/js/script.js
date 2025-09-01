// navbar code start 
const menuIcon = document.querySelector('.menu-icon');
const menuIconImg = document.querySelector('.menu-icon img');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');
const collapsibles = document.querySelectorAll('.collapsible');
const navbar = document.querySelector('.nav-bar');
const contactnavbar = document.querySelector('.contact_nav');
const logo = document.getElementById('logo');
const navdropicon_battery = document.querySelector('.batteries .nav-dropicon');
const navdropicon_inverter = document.querySelector('.inverters .nav-dropicon');
const batteryDropdown = document.querySelector('.wide-dropdown.batterydropdown');
const inverterDropdown = document.querySelector('.wide-dropdown.inverterdropdown');
let drop = document.querySelectorAll(".nav-bar .wide-dropdown");
let dropopen = false;

const dropdownContainer = document.querySelector('.language');
const dropdownToggle = document.querySelector('.language-toggle');
const dropdownMenu = document.querySelector('.language-options');
const selectedLang = document.querySelector('.selected-language');
const langdropicon = document.querySelector('.language-dropdown-icon');



document.addEventListener('DOMContentLoaded', function () {
    const batteryToggle = document.querySelector('.nav-link.batteries');
    const inverterToggle = document.querySelector('.nav-link.inverters');

    dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate close
        // Close both first
        const isActive = dropdownMenu.classList.contains('show');
        closeAllDropdowns()

        if (!isActive) {
            dropdownMenu.classList.toggle('show');
            langdropicon.classList.toggle('rotate');
        }

    });

    // Change language text on click
    dropdownMenu.querySelectorAll('a').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            selectedLang.textContent = option.dataset.lang;
            dropdownMenu.classList.remove('show');
            langdropicon.classList.remove('rotate');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            langdropicon.classList.remove('rotate');
        }
    });


    // Toggle Battery Dropdown
    batteryToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isActive = batteryDropdown.classList.contains('active');

        // Close both first
        closeAllDropdowns();

        if (!isActive) {
            dropopen = true
            batteryDropdown.classList.add('active');
            navdropicon_battery.style.rotate = "180deg"
            navbar.style.background = "white"
            navbar.classList.add("scrolled")
            drop[0].style.top = "70px"
            drop[1].style.top = "70px"
            if (logo) {
                logo.src = './assets/imgs/nav_logo.png'; // Change logo
            }
        }
    });

    // Toggle Inverter Dropdown
    inverterToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isActive = inverterDropdown.classList.contains('active');

        // Close both first
        closeAllDropdowns();

        if (!isActive) {
            dropopen = true
            inverterDropdown.classList.add('active');
            navdropicon_inverter.style.rotate = "180deg"
            navbar.style.background = "white"
            navbar.classList.add("scrolled")
            drop[0].style.top = "70px"
            drop[1].style.top = "70px"
            if (logo) {
                logo.src = './assets/imgs/nav_logo.png'; // Change logo
            }
            scrollfunction()
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function () {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        console.log("ddd", dropdownMenu.classList)
        dropopen = false
        dropdownMenu.classList.remove('show');
        langdropicon.classList.remove('rotate');
        batteryDropdown.classList.remove('active');
        inverterDropdown.classList.remove('active');
        navdropicon_battery.style.rotate = "0deg"
        navdropicon_inverter.style.rotate = "0deg"
        navbar.classList.remove("scrolled")
        navbar.setAttribute("style", "")
        drop[0].style.top = "100px"
        drop[1].style.top = "100px"
        if (logo) {
            logo.src = './assets/imgs/logo_nav.png'; // Change logo
        }
        scrollfunction()
    }
});
window.addEventListener("load", () => {

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        menuIconImg.style.filter = "invert(1)";
        if (mobileMenu.classList.contains('active')) {
            navbar.style.background = "transparent"
            navbar.style.backdropFilter = "none"
        }
        drop[0].style.top = "70px"
        drop[1].style.top = "70px"
        if (logo) {
            logo.src = './assets/imgs/nav_logo.png'; // Change logo
        }
    } else {
        if (!dropopen) {
            navbar.classList.remove('scrolled');
            menuIconImg.style.filter = "invert(0)";
            navbar.setAttribute("style", "")
            if (mobileMenu.classList.contains('active')) {
                contactnavbar.style.background = "transparent"
                contactnavbar.style.backdropFilter = "none"
            }

            drop[0].style.top = "100px"
            drop[1].style.top = "100px"
            if (logo) {
                logo.src = './assets/imgs/logo_nav.png'; // Change logo
            }
        }
    }
})
let scrollfunction = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        menuIconImg.style.filter = "invert(1)";
        if (mobileMenu.classList.contains('active')) {
            navbar.style.background = "transparent"
            navbar.style.backdropFilter = "none"
        }
        // drop[0].style.top = "70px"
        // drop[1].style.top = "70px"
        if (logo) {
            logo.src = './assets/imgs/nav_logo.png'; // Change logo
        }
    } else {
        if (!dropopen) {
            navbar.classList.remove('scrolled');
            menuIconImg.style.filter = "invert(0)";
            navbar.setAttribute("style", "")
            if (mobileMenu.classList.contains('active')) {
                console.log(contactnavbar)
                contactnavbar.style.background = "transparent"
                contactnavbar.style.backdropFilter = "none"
            }
            // drop[0].style.top = "100px"
            // drop[1].style.top = "100px"
            if (logo) {
                logo.src = './assets/imgs/logo_nav.png'; // Change logo
            }
        }
    }
};
window.addEventListener('scroll', scrollfunction);

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close menu on window resize if greater than 991px
// window.addEventListener('resize', () => {
//     if (window.innerWidth > 991) {
//         mobileMenu.classList.remove('active');
//     }
// });

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
});//navbar css end
// slider code start
// $(document).ready(function () {
//     // Initialize carousel
//     $(".product-slider").owlCarousel({
//         items: 1,
//         loop: true,
//         nav: true,
//         dots: false,
//         autoplay: true,
//         autoplayTimeout: 3777000,
//         navText: [
//             "<span class='owl-prev-custom'><img src='./assets/icons/chevron-left.svg'/></span>",
//             "<span class='owl-next-custom'><img src='./assets/icons/chevron-right.svg'/></span>"
//         ]
//     });

//     // Tabs switching
//     $(".tab-btn").click(function () {
//         $(".tab-btn").removeClass("active");
//         $(this).addClass("active");

//         $(".tab-content").addClass("d-none").removeClass("active");
//         $($(this).data("target")).removeClass("d-none").addClass("active");
//     });
// });
$(document).ready(function () {
    // Initialize all carousels
    $(".product-slider").each(function () {
        $(this).owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 10000,
            navText: [
                "<span class='owl-prev-custom'><img src='./assets/icons/chevron-left.svg'/></span>",
                "<span class='owl-next-custom'><img src='./assets/icons/chevron-right.svg'/></span>"
            ]
        });
    });

    // Tabs switching
    $(".tab-btn").click(function () {
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").addClass("d-none").removeClass("active");
        $($(this).data("target")).removeClass("d-none").addClass("active");

        // Reset highlight and features for first slide
        let activeTab = $(".tab-content.active");
        activeTab.find(".products_categories [data-slide]").removeClass("active");
        activeTab.find(".products_categories [data-slide='0']").addClass("active");

        activeTab.find(".features-box").addClass("d-none").removeClass("active");
        activeTab.find(".features-box[data-slide='0']").removeClass("d-none").addClass("active");
    });

    // Click on product name to change slide & update features
    $(".products_categories [data-slide]").click(function () {
        let slideIndex = $(this).data("slide");
        let activeCarousel = $(".tab-content.active .product-slider");
        let activeTab = $(".tab-content.active");

        // Change carousel slide
        activeCarousel.trigger("to.owl.carousel", [slideIndex, 300, true]);

        // Update highlight
        activeTab.find(".products_categories [data-slide]").removeClass("active");
        $(this).addClass("active");

        // Update features
        activeTab.find(".features-box").addClass("d-none").removeClass("active");
        activeTab.find(`.features-box[data-slide='${slideIndex}']`).removeClass("d-none").addClass("active");
    });

    // Sync when carousel changes (arrows/autoplay/swipe)
    $(".product-slider").on("changed.owl.carousel", function (event) {
        let currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
        if (currentIndex < 0) currentIndex = event.item.count - 1;
        if (currentIndex >= event.item.count) currentIndex = 0;

        let parentSection = $(this).closest(".tab-content");

        // Update highlight
        parentSection.find(".products_categories [data-slide]").removeClass("active");
        parentSection.find(`.products_categories [data-slide='${currentIndex}']`).addClass("active");

        // Update features
        parentSection.find(".features-box").addClass("d-none").removeClass("active");
        parentSection.find(`.features-box[data-slide='${currentIndex}']`).removeClass("d-none").addClass("active");
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
            992: { items: 2 },  // 3 cards on desktops
            1024: { items: 2.5 },  // 2 cards on tablets
        }
    });

});
$('.blog_slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    center: true,
    items: 1,
    stagePadding: ($(window).width() * 0.10), // 15% each side for half cards
    responsive: {
        0: {
            items: 1.3,
            stagePadding: 20
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

// accordian js 
// Accordian JS
$(function () {
    const $panel = $(".benefits_panel");
    const $listItems = $panel.find(".left_panel ul li[data-img]");
    const $rightImage = $panel.find(".right_panel img");

    // Reset any inline styles (we use CSS transitions now)
    $listItems.find(".accordion-content").removeAttr("style");

    // Open first by default
    const $first = $listItems.first();
    $first.addClass("active");
    $first.find(".accordion-content").addClass("show");
    $rightImage.attr("src", $first.data("img"));

    // Click handler
    $listItems.on("click", function () {
        const $item = $(this);
        const $content = $item.find(".accordion-content");
        const newSrc = $item.data("img");

        if ($item.hasClass("active")) return;

        // Close all
        $listItems.removeClass("active");
        $listItems.find(".accordion-content").removeClass("show");

        // Open clicked
        $item.addClass("active");
        $content.addClass("show");

        // Smooth image change
        if (newSrc) {
            $rightImage.stop(true, true).fadeOut(300, function () {
                $(this).attr("src", newSrc).fadeIn(300);
            });
        }
    });
});

function toggleassumption(p) {
    const assumptionicon = document.querySelector('.assumption-icon');
    const text = document.querySelector('.assumption-text');
    text.classList.toggle('showassumption');
    assumptionicon.classList.toggle('rotate');
}

// slider code end

// image dragable code start
$(document).ready(function () {
    let isDragging = false;
    let sliderContainer = $('.slider-container');
    let foregroundImage = $('.foreground-image');
    let sliderHandle = $('.slider-handle');
    let sliderLine = $('.slider-line');

    // Initialize position
    let containerWidth = sliderContainer.width();
    let initialPosition = 125; // 125px from left

    function updateSlider(position) {
        let percentage = (position / containerWidth) * 100;
        percentage = Math.max(0, Math.min(100, percentage));

        // Update clip-path to reveal/hide the foreground image
        foregroundImage.css('clip-path', `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`);
        sliderHandle.css('left', percentage + '%');
        sliderLine.css('left', percentage + '%');
    }

    updateSlider(initialPosition);

    // Mouse events
    sliderHandle.on('mousedown', function (e) {
        isDragging = true;
        e.preventDefault();
        $(document).css('user-select', 'none');
    });

    $(document).on('mousemove', function (e) {
        if (isDragging) {
            let containerOffset = sliderContainer.offset();
            let mouseX = e.pageX - containerOffset.left;
            updateSlider(mouseX);
        }
    });

    $(document).on('mouseup', function () {
        if (isDragging) {
            isDragging = false;
            $(document).css('user-select', 'auto');
        }
    });

    // Touch events for mobile
    sliderHandle.on('touchstart', function (e) {
        isDragging = true;
        e.preventDefault();
    });

    $(document).on('touchmove', function (e) {
        if (isDragging) {
            let touch = e.originalEvent.touches[0];
            let containerOffset = sliderContainer.offset();
            let touchX = touch.pageX - containerOffset.left;
            updateSlider(touchX);
        }
    });

    $(document).on('touchend', function () {
        isDragging = false;
    });

    // Click on container to move slider
    sliderContainer.on('click', function (e) {
        if (e.target === this || $(e.target).hasClass('background-image') || $(e.target).hasClass('foreground-image')) {
            let containerOffset = $(this).offset();
            let clickX = e.pageX - containerOffset.left;
            updateSlider(clickX);
        }
    });

    // Keyboard navigation
    $(document).on('keydown', function (e) {
        let currentLeft = parseFloat(sliderHandle.css('left')) || initialPosition;
        let step = containerWidth * 0.05; // 5% steps

        if (e.key === 'ArrowLeft') {
            updateSlider(currentLeft - step);
        } else if (e.key === 'ArrowRight') {
            updateSlider(currentLeft + step);
        }
    });

    // Handle window resize
    $(window).on('resize', function () {
        containerWidth = sliderContainer.width();
        // Get current percentage from slider handle position
        let currentPercentage = parseFloat(sliderHandle.css('left')) || (initialPosition / containerWidth * 100);
        updateSlider((currentPercentage / 100) * containerWidth);
    });

});
// image dragable code end