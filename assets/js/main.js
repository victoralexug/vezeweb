(function($) {
	"use strict";

	var wind = $(window);
	
	
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
