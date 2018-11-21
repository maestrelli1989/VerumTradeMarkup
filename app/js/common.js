/* Scroll top button */

$(function() {
	var scrollTop = $("#scrollTop");
	$(scrollTop).click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});

/* Scroll bottom button */

$(function() {
	var scrollBottom = $("#scrollBottom");
	$(scrollBottom).click(function() {
		$('html, body').animate({
			scrollTop: $("#scrollToBlock").offset().top
		}, 2000);
	});
});

/* Add blue-border to active faq accordion item */

(function() {
	$(".card").on("show.bs.collapse hide.bs.collapse", function(e) {
		if (e.type=='show') {
			$(this).addClass('blue-card');
		} else {
			$(this).removeClass('blue-card');
		}
	});  
}).call(this);

const lineEq = (y2, y1, x2, x1, currentVal) => {
    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
    return m * currentVal + b;
};
const distanceThreshold = {min: 0, max: 100};
const grayscaleInterval = {from: 1, to: 0};
const borderInterval = {from: 0.1, to: 1};
const graphicInterval = {from: 60, to: 0};
const textInterval = {from: 0, to: -20};

$(function() {
	$(".meter > span").each(function() {
		$(this)
			.data("origWidth", $(this).width())
			.width(0)
			.animate({
				width: $(this).data("origWidth")
			}, 1200);
	});
});