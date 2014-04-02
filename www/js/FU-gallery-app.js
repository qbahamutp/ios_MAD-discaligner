var swipernumber0, swipernumber1;

function changeSize() {
	//Unset Width
	$('.swiper-slide, .otherswiper-slide').css('width','')
	//Get Size
	var imgWidth = $('.swiper-slide img, .otherswiper-slide img').width();
	if (imgWidth+40>$(window).width()) imgWidth = $(window).width()-40;
	//Set Width
	$('.swiper-slide, .otherswiper-slide').css('width', imgWidth+40);
}

$(function(){
	$('.swiper-container').each(function( index, value ){
		window['swipernumber' + index] = $(this).swiper({
			slidesPerView:'auto',
			watchActiveIndex: true,
			centeredSlides: true,
			resizeReInit: true,
			keyboardControl: true,
			grabCursor: true,
			onImagesReady: function(){
				changeSize()
			}
		});
	})

/*
	var othergallery = $('.otherswiper-container').swiper({
		slidesPerView:'auto',
		watchActiveIndex: true,
		centeredSlides: true,
		resizeReInit: true,
		keyboardControl: true,
		grabCursor: true,
		onImagesReady: function(){
			changeSize()
		}
	});
*/
	
	changeSize()

	//Smart resize
	$(window).resize(function(){
		changeSize();
		swipernumber0.resizeFix(true);
		swipernumber1.resizeFix(true);
//			gallery.resizeFix(true);
//		othergallery.resizeFix(true);
	})
})
