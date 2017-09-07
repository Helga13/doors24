$(document).ready(function () {
  
  'use strict'
  
	// tabs
	$('.tabs_block').each(function () {
		$(this).find('.tab').each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();	$(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active')
			});
		});
	});
  
  //banner
  $('.main_banner').not('.slick-initialized').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1
  });
  
  // dropdown
  $('.js-dropdown').on('click', function (e) {
    e.preventDefault();
    if($(this).hasClass('active')){
      $(this).toggleClass('active').next('.dropdown_block').slideUp(200);
    }else{
      $('.js-dropdown').removeClass('active').next('.dropdown_block').slideUp(100);
      $(this).toggleClass('active').next('.dropdown_block').slideToggle(200);
    }
  });
  
  //doors_slider
  $('.doors_slider').not('.slick-initialized').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  });
	
	$('.popular_goods_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    dots: true,
  });
	
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 23,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });        
	
  // product slider with thumbs

    $('.show_image').click(function (e) {
        e.preventDefault();
        var mainImage = $(this).index();
        $('.show_image').removeClass('active');
        $(this).addClass('active');
//        $('.main_image li').removeClass('active');
        $('.main_image li').removeClass('active').eq(mainImage).addClass('active');
    });
  
})