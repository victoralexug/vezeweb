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