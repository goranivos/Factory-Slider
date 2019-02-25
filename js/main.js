var sliderTop = $('#slider-top .slider-inner');
var sliderBottom = $('#slider-bottom .slider-inner');

var sliderTopItems = $('#slider-top .slider-item');
var sliderBottomItems = $('#slider-bottom .slider-item');

var sliderTopWidth = 0;
var sliderBottomWidth = 0;

var sliderTopWrapper = $('#slider-top .slider-wrapper');
var sliderBottomWrapper = $('#slider-bottom .slider-wrapper');

for (var i = 0; i < sliderTopItems.length; i++) {
   sliderTopWidth += $(sliderTopItems[i]).outerWidth(true);
 }

for (var i = 0; i < sliderBottomItems.length; i++) {
   sliderBottomWidth += $(sliderBottomItems[i]).outerWidth(true);
 }

$(sliderTop).css('width', sliderTopWidth);
$(sliderTopWrapper).css({"width": sliderTopWidth, "right": 0});

$(sliderBottom).css('width', sliderBottomWidth);
$(sliderBottomWrapper).css({"width": sliderBottomWidth, "right": 0});

$('.control-prev').on('click', function () {
  var lastWidthTop = $("#slider-top .slider-item img").last().outerWidth(true);
  var lastWidthBottom = $("#slider-bottom .slider-item img").last().outerWidth(true);
  
  var lastTop = $("#slider-top .slider-item").last().css({
      width: '0px'
    });
  var lastBottom = $("#slider-bottom .slider-item").last().css({
      width: '0px'
    });
  
    lastTop.prependTo("#slider-top .slider-inner");
    lastTop.animate({width: lastWidthTop},400);
  
    lastBottom.prependTo("#slider-bottom .slider-inner");
    lastBottom.animate({width: lastWidthBottom},400);
  
    lastTop.addClass("animate-prev").delay(100).queue(function(next){
      $(this).removeClass("animate-prev");
      next();
    });
    lastBottom.addClass("animate-prev").delay(100).queue(function(next){
      $(this).removeClass("animate-prev");
      next();
    });
});

$('.control-next').on('click', function () {
  var firstWidthTop = $("#slider-top .slider-item img").first().outerWidth(true);
  var firstWidthBottom = $("#slider-bottom .slider-item img").first().outerWidth(true);
  
  var firstTop = $('#slider-top .slider-item').first();
  var firstBottom = $('#slider-bottom .slider-item').first();
  
  firstTop.addClass("animate-next");
  firstBottom.addClass("animate-next");
  
    firstTop.animate({
      width: '0px'
    },500, function() {
        firstTop.appendTo('#slider-top .slider-inner').css({width: firstWidthTop});
        $('#slider-top .slider-item').last().removeClass("animate-next");
    });
  
  firstBottom.animate({
      width: '0px'
    },500, function() {
        firstBottom.appendTo('#slider-bottom .slider-inner').css({width: firstWidthBottom});
        $('#slider-bottom .slider-item').last().removeClass("animate-next");
    });
  
});