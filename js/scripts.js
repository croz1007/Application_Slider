$(document).ready(function(){
	$("#content-slider").slider({
		animate: true,
		change: handleSliderChange,
		slide: handleSliderSlide
	});
  
	//Count the images in the content holder and set the width accordingly.
	var image = $('#content-holder a img');
	var sumWidth = image.width() * image.length; 
	$("#content-holder").css({'width' : sumWidth});

	//Make the wrapper the entire height of the page
	resizeDiv();
});

window.onresize = function (event) {
    resizeDiv();
}

function resizeDiv() {
    vph = $(window).height();
    scroll_W = $("#wrapper").width();
    holder_W = $("#content-holder").width();
    $("#wrapper").css({ "height": vph + "px" });
    
    // Show or hide slider handle base on holder width
    // related to the wrapper width.
    if(scroll_W < holder_W)
    {
    	$("#content-slider").removeClass("showSlider");
    }
    else
    {
    	$("#content-slider").addClass("showSlider");
    }
}

function handleSliderChange(e, ui)
{
  var maxScroll = $("#content-scroll").attr("scrollWidth") - $("#content-scroll").width();
  $("#content-scroll").animate({scrollLeft: ui.value * (maxScroll / 100) }, 1000).stop();
  
}

function handleSliderSlide(e, ui)
{
  var maxScroll = $("#content-scroll").attr("scrollWidth") - $("#content-scroll").width();
  $("#content-scroll").attr({scrollLeft: ui.value * (maxScroll / 100) }).stop();
}