if ($("#mobile-indicator").css("display") == "none") {

	var is_mobile = true;

} else {

	var is_mobile = true;

}



function animateAll() {

	if ($("#mobile-indicator").css("display") == "none" && !$("body").hasClass("animated")) {

		$("body").addClass("animated");

		var controller = new ScrollMagic.Controller();

		var sectionTopInfoTween = TweenMax.to($(".section-top-info"), 1, {
			scale: 1,
			opacity: 1,
			rotation: -15,
			ease: Back.easeOut.config(1.7),
			overwrite: "none",
			delay: .5
		});

		var sectionTopInfoScene = new ScrollMagic.Scene({
			triggerElement: ".section-top",
			offset: 100
		})
			.setTween(sectionTopInfoTween)
			.addTo(controller);

		var pageHeaderPicTween = TweenMax.to($(".section-profession-header .page-header-pic"), 1, {
			scale: 1,
			opacity: 1,
			ease: Back.easeOut.config(1.7),
			overwrite: "none",
			delay: .5
		});

		var pageHeaderPicScene = new ScrollMagic.Scene({
			triggerElement: "body",
			offset: 100
		})
			.setTween(pageHeaderPicTween)
			.addTo(controller);

	}
		
}

$(window).on("resize", function () {

	animateAll();

});

$(document).ready(function () {

	animateAll();

});


$(window).on("resize scroll load", function () {







});

(function( $ ) {
	$.fn.prlx = function(pTrigger, yStart, yFinish, fromTop) {

		if (!is_mobile && $(this).length) {

			var obj = $(this);

			var yPos;

			if (fromTop == false && $(window).scrollTop() < pTrigger.offset().top - $(window).height()) {

				yPos = yStart;

			} else if (fromTop == false && $(window).scrollTop() > pTrigger.offset().top + $(window).height()) {

				yPos = yFinish;


			} else {

				if (fromTop) {

					if (pTrigger.offset().top <= $(window).scrollTop()) {

						var percentOffset = (pTrigger.offset().top - $(window).scrollTop()) / ($(window).height() * 2);

					} else {

						percentOffset = 0;

					}

				} else {

					var percentOffset = (pTrigger.offset().top + $(window).height() - $(window).scrollTop()) / ($(window).height() * 2);

				}

				var yRange = yStart - yFinish,
					posInRange = yRange * percentOffset,
					yPos = posInRange + yFinish;

				obj.attr("percentOffset", percentOffset);

			}

			TweenMax.to(obj, .5, {y: yPos, ease:Linear.ease});

		}

	};
})( jQuery );
