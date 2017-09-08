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
        $('.main_image li').removeClass('active').eq(mainImage).addClass('active');
    });
  
  // product description
  
  $('.js-field').on('click', '.title', function(){
    var descr = $(this).parents('.js-field');
    if( $(descr).hasClass('active')){
      $(descr).toggleClass('active').find('.subfield').fadeOut(100);
    }else{
      $('.js-field').removeClass('active').find('.subfield').fadeOut(100);
      $(descr).toggleClass('active').find('.subfield').fadeIn(100);
    }
  });
  
  $('.js-title_field').on('click', function(){
    if( $(this).hasClass('active')){
      $(this).toggleClass('active').next('.field_wrap').slideUp(100);
    }else{
      $('.js-title_field').removeClass('active').next('.field_wrap').slideUp(100);
      $(this).toggleClass('active').next('.field_wrap').slideDown(100);
    }
  });
  
  // calc
  
  function number() {
    var number = $(".js-number");
    number.each(function () {
      var max_number = +($(this).attr("data-max-number"));
      var input = $(this).find("input");
      var plus = $(this).find(".js-plus-number");
      var minus = $(this).find(".js-minus-number");
      plus.on("click", function () {
        var val = +(input.val());
        if (val >= max_number) {
          return false
        }
        else {
          val += 1;
          input.val(val);
        }
      });
      minus.on("click", function () {
        var val = +(input.val());
        if (val > 1) {
          val -= 1;
          input.val(val);
        }
        return false;
      });
      input.on("change", function () {
        var val = +$(this).val();
        if (val > max_number) {
          val = max_number;
          $(this).val(val);
        }
        if (val == '') {
          val = 1;
          $(this).val(val);
        }
      });
    });
  }
  number();
  
})