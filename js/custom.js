/* ===== Mainheader Navbar transparent to solid =====  */
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.main-header').addClass('solid');
		} else {
			$('.main-header').removeClass('solid');
		}
	});
});

/* ===== Darken header if navbar collapse =====  */
$(document).ready(function() {
	$('.navbar-toggler').on('click', function() {
		$('.main-header').addClass('solid');
		const closed = $('.navbar-collapse').hasClass('show');
		if (closed === true) {
			$('.main-header').removeClass('solid');
		}
	});
});

/* ===== Close mobile nav on click =====  */
$(document).ready(function() {
	$(document).click(function(event) {
		const clickover = $(event.target);
		const _opened = $('.navbar-collapse').hasClass('show');
		if (_opened === true && !clickover.hasClass('navbar-toggler')) {
			$('.navbar-toggler').click();
		}
	});
});

/* ===== Smooth scrolling to links =====  */
$(document).ready(function() {
	$('a').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			const hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				800,
				function() {
					window.location.hash = hash;
				}
			);
		} // End if
	});
});

/* ===== Bouncing down arrow =====  */
$(document).ready(function() {
	$(window).scroll(function() {
		$('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
	});
});

/* ===== Gallery =====  */
$(document).ready(function() {
	$('#gallery-slider').owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});
});

$(function() {
	$('[data-toggle="popover"]').popover();
});
