(function($) {
	"use strict";

	var wind = $(window);
	
	var wind = $(window);
	var parallaxSlider;
	var parallaxSliderOptions = {
		speed: 1000,
		autoplay: true,
		parallax: true,
		loop: true,

		on: {
			init: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					$(swiper.slides[i])
						.find('.bg-img')
						.attr({
							'data-swiper-parallax': 0.75 * swiper.width
						});
				}
			},
			resize: function() {
				this.update();
			}
		},

		pagination: {
			el: '.slider-prlx .parallax-slider .swiper-pagination',
			dynamicBullets: true,
			clickable: true
		},

		navigation: {
			nextEl: '.slider-prlx .parallax-slider .next-ctrl',
			prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
		}
	};
	parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);

	
	// Var Background image
	var pageSection = $(".bg-img, section");
	pageSection.each(function(indx) {
		if ($(this).attr("data-background")) {
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});

	// Header Sticky
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 120) {
			$('.navbar-section').addClass("is-sticky");
		} else {
			$('.navbar-section').removeClass("is-sticky");
		}
	});

	// Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Button Hover JS
	$(function() {
		$('.default-btn, .default-btn-one')
			.on('mouseenter', function(e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({
					top: relY,
					left: relX
				})
			})
			.on('mouseout', function(e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({
					top: relY,
					left: relX
				})
			});
	});

	// Skill Progress
	wind.on('scroll', function() {
		$(".skill-progress .progres").each(function() {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			var myVal = $(this).attr('data-value');
			if (bottom_of_window > bottom_of_object) {
				$(this).css({
					width: myVal
				});
			}
		});
	});

	// Tabs
	(function($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function(g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

	// Testimonial Slider
	$('.testimonial-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 20,
		navText: [
			"<i class='fa fa-chevron-left'></i>",
			"<i class='fa fa-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Image Sliders
	$('.image-sliders').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 20,
		navText: [
			"<i class='fa fa-chevron-left'></i>",
			"<i class='fa fa-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			1200: {
				items: 1,
			}
		}
	});
	
	// WOW JS
	$(window).on('load', function() {
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: 'wow', // Animated element css class (default is wow)
				animateClass: 'animated', // Animation css class (default is animated)
				offset: 20, // Distance to the element when triggering the animation (default is 0)
				mobile: true, // Trigger animations on mobile devices (default is true)
				live: true, // Act on asynchronously loaded content (default is true)
			});
			wow.init();
		}
	});


}(jQuery));

// pre loader
document.addEventListener("DOMContentLoaded", () => {
	const preloader = document.getElementById("preloader");
	const body = document.body; // use the <body> element

	setTimeout(() => {
		if (preloader) {
			preloader.style.opacity = "0";
			preloader.style.visibility = "hidden";
		}

		if (body) {
			body.classList.remove("hidden");
			body.classList.add("fade-in");
		}
	}, 1000); // 1s delay
});

//mail submit
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById('contact-form');
	const formMessage = document.getElementById('form-message');

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		const formData = new FormData(form);

		// Show loading message for 1 second
		formMessage.classList.remove('error', 'success');
		formMessage.classList.add('loading');
		formMessage.innerText = "Sending...";

		setTimeout(() => {
			fetch(form.getAttribute('action') || '/', {
				method: "POST",
				body: formData,
			})
			.then(response => {
				formMessage.classList.remove('loading');
				if (response.ok) {
					formMessage.classList.add('success');
					formMessage.innerText = "Message sent successfully!";
					form.reset();
				} else {
					throw new Error("Submission failed");
				}
			})
			.catch(() => {
				formMessage.classList.remove('loading');
				formMessage.classList.add('error');
				formMessage.innerText = "Oops! Something went wrong.";
			});
		}, 1200); // 1 second delay
	});
});

/* ============================================================
   VEZEWEB — VICTOR EZE PROFILE
============================================================ */


/* ============================================================
   MOBILE NAVIGATION
============================================================ */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      mobileMenu.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen.toString()
    );

  });


  /*
   * Close the mobile menu after clicking a link.
   */

  const mobileLinks =
    mobileMenu.querySelectorAll("a");

  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* ============================================================
   HEADER SCROLL EFFECT
============================================================ */

const header =
  document.getElementById("siteHeader");

function updateHeader() {

  if (!header) return;

  if (window.scrollY > 30) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);

updateHeader();


/* ============================================================
   SCROLL REVEAL
============================================================ */

const revealElements =
  document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");

          observerInstance.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
      }
    );

  revealElements.forEach((element) => {

    observer.observe(element);

  });

} else {

  revealElements.forEach((element) => {

    element.classList.add("visible");

  });

}


/* ============================================================
   CURRENT YEAR
============================================================ */

const yearElement =
  document.getElementById("currentYear");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* ============================================================
   SMOOTH ANCHOR SCROLL
============================================================ */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* ============================================================
   IMAGE ERROR FALLBACK
============================================================ */

document
  .querySelectorAll("img")
  .forEach((image) => {

    image.addEventListener(
      "error",
      () => {

        image.style.background =
          "#deded9";

        image.style.minHeight =
          "300px";

        image.removeAttribute("src");

        image.alt =
          "Victor Eze image placeholder";

      }
    );

  });


/* ============================================================
   UPDATE ACTIVE NAVIGATION
============================================================ */

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const navLinks =
  document.querySelectorAll(
    '.desktop-nav a[href^="#"]'
  );

if (
  sections.length &&
  navLinks.length &&
  "IntersectionObserver" in window
) {

  const sectionObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          const id =
            entry.target.getAttribute("id");

          navLinks.forEach((link) => {

            link.classList.remove(
              "active"
            );

            if (
              link.getAttribute("href") ===
              `#${id}`
            ) {

              link.classList.add(
                "active"
              );

            }

          });

        });

      },
      {
        rootMargin:
          "-30% 0px -60% 0px"
      }
    );

  sections.forEach((section) => {

    sectionObserver.observe(section);

  });

}


/* ============================================================
   KEYBOARD ACCESSIBILITY
============================================================ */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      if (
        mobileMenu &&
        mobileMenu.classList.contains("open")
      ) {

        mobileMenu.classList.remove("open");

        if (menuToggle) {

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      }

    }

  }
);