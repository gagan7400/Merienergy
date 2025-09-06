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
            batteryToggle.classList.add("active");
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
            inverterToggle.classList.add("active")
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
        navdropicon_battery.style.rotate = "0deg";
        inverterToggle.classList.remove("active")
        batteryToggle.classList.remove("active");
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
//navbar css end

// slider code start
$(document).ready(function () {

    $(".product-slider").each(function () {
        $(this).owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            smartSpeed: 600, // smooth slide speed

            navText: [
                "<span class='owl-prev-custom'><img src='./assets/icons/chevron-left.svg'/></span>",
                "<span class='owl-next-custom'><img src='./assets/icons/chevron-right.svg'/></span>"
            ]
        });
        // updateArrows($(this));
    });

    // Tabs switching
    $(".tab-btn").click(function () {
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").removeClass("active").addClass("hidden");
        $($(this).data("target")).removeClass("hidden").addClass("active");

        // Reset highlight and features for first slide
        let activeTab = $(".tab-content.active");
        activeTab.find(".products_categories [data-slide]").removeClass("active");
        activeTab.find(".products_categories [data-slide='0']").addClass("active");

        activeTab.find(".features-box").addClass("hidden").removeClass("active");
        activeTab.find(".features-box[data-slide='0']").removeClass("hidden").addClass("active");
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
        activeTab.find(".features-box").addClass("hidden").removeClass("active");
        activeTab.find(`.features-box[data-slide='${slideIndex}']`).removeClass("hidden").addClass("active");
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
        parentSection.find(".features-box").addClass("hidden").removeClass("active");
        parentSection.find(`.features-box[data-slide='${currentIndex}']`).removeClass("hidden").addClass("active");
    });
});


$(document).ready(function () {
    var $owl = $(".testimonial-section .owl-carousel");

    $owl.owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
            "<img class='owl-prev-custom' src='./assets/icons/chevron-left_disabled.svg'/>",
            "<img class='owl-next-custom' src='../../chevron-right.svg'/>"
        ], responsive: {
            0: {        // Mobile
                items: 1
            },
            768: {      // Tablet
                items: 2
            },
            1024: {     // Desktop
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    function toggleNav(event) {
        var $prev = $(".testimonial-section .owl-prev-custom");
        var $next = $(".testimonial-section .owl-next-custom");

        var totalItems = event.item.count;
        var visibleItems = event.page.size; // number of visible slides
        var currentIndex = event.item.index;

        if (currentIndex <= 0) {
            $prev.addClass("disabled");
        } else {
            $prev.removeClass("disabled");
        }

        if (currentIndex + visibleItems >= totalItems) {
            $next.addClass("disabled");
        } else {
            $next.removeClass("disabled");
        }
    }

    toggleNav({
        item: { index: 0, count: $owl.find(".owl-item").length },
        page: { size: $owl.find(".owl-item.active").length }
    });

    $owl.on("changed.owl.carousel", function (event) {
        toggleNav(event);
    });

    // ✅ Fix the jump bug for fractional slides
    $owl.on("translated.owl.carousel", function (event) {
        var totalItems = event.item.count;
        var visibleItems = event.page.size;
        var currentIndex = event.item.index;

        if (currentIndex + visibleItems > totalItems) {
            $owl.trigger("to.owl.carousel", [totalItems - visibleItems, 300]);
        }
    });
});



$('.blog_slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    center: true, // ensures the center slide is main focus
    items: 1,
    stagePadding: ($(window).width() * 0.10), // peek effect
    smartSpeed: 800, // smoother transition
    responsive: {
        0: {
            items: 1.1,
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
    ]
});


    $(function () {
      const $lis = $(".left_panel ul > li");

      // MAIN: open/close accordion item
      $lis.on("click", function (e) {
        if ($(e.target).closest(".inner-accordian").length) return;

        const $li = $(this);
        const $content = $li.children(".accordion-content");
        const imgSrc = $li.data("img");

        // Close others
        $lis.not($li).removeClass("accordion-active")
          .children(".accordion-content").each(function () {
            $(this).stop(true, true).css({ height: 0, opacity: 0 });
          });
        $lis.not($li).find(".assumption-text").css("max-height", "0");
        $lis.not($li).find(".assumption-icon").css({ transform: "rotate(0deg)" });
        $lis.not($li).find(".inner-accordian").data("assumption-open", false);

        // Toggle current
        const isOpen = $li.hasClass("accordion-active");
        if (isOpen) {
          $li.removeClass("accordion-active");
          $content.stop(true, true).css({ height: 0, opacity: 0 });
          // Also close any open assumptions in this accordion
          $content.find(".assumption-text").css("max-height", "0");
          $content.find(".assumption-icon").css({ transform: "rotate(0deg)" });
          $content.find(".inner-accordian").data("assumption-open", false);
        } else {
          $li.addClass("accordion-active");
          const h = $content.get(0).scrollHeight;
          $content.stop(true, true).css({ height: h + "px", opacity: 1 });

          if (imgSrc) {
              $(".right_panel img").attr("src", imgSrc);
          }

        //   $(".right_panel img").fadeOut(400, function () {
        //     $(this).attr("src", imgSrc).fadeIn(100);

        //   });
        }
      });


      $(".left_panel").on("click", ".inner-accordian", function (e) {
        e.stopPropagation();

        const $wrap = $(this);
        console.log(this.offsetHeight)
        const $text = $wrap.find(".assumption-text");
        const $icon = $wrap.find(".assumption-icon");
        const $accordionContent = $wrap.closest(".accordion-content");
        const $parentLi = $accordionContent.closest("li");

        // Use data attribute to track state more reliably
        const isAssumptionOpen = $wrap.data("assumption-open") === true;

        if (isAssumptionOpen) {
          // Close assumption
          $text.css("max-height", "0");
          $icon.css({ transform: "rotate(0deg)" });
          $wrap.data("assumption-open", false);
        } else {
          // First close all assumptions inside same li
          $accordionContent.find(".assumption-text").css("max-height", "0");
          $accordionContent.find(".assumption-icon").css({ transform: "rotate(0deg)" });
          $accordionContent.find(".inner-accordian").data("assumption-open", false);

          // Open clicked assumption
          const el = $text.get(0);
          const h = el.scrollHeight;

          $text.css("max-height", h + "px");
          $icon.css({ transform: "rotate(180deg)" });
          $wrap.data("assumption-open", true);
        }

        // 🔑 Recalculate parent accordion height after assumption change
        setTimeout(() => {
          const newHeight = $accordionContent.get(0).scrollHeight;
          $accordionContent.css("height", newHeight + "px");
        }, 220); // Increased delay to ensure CSS transition completes
      });

      // INITIAL RENDER: open first item
      const $firstLi = $lis.first();
      $firstLi.addClass("accordion-active");
      const $firstContent = $firstLi.children(".accordion-content");
      $firstContent.css({
        height: $firstContent.get(0).scrollHeight + "px",
        opacity: 1
      });
      const firstImgSrc = $firstLi.data("img");
      if (firstImgSrc) {
        $(".right_panel img").attr("src", firstImgSrc);
      }
    });
 

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