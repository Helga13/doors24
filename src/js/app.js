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
//    autoplay: true,
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
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
//    {
//      breakpoint: 480,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    }
  ]
  });
	
  $('.popular_goods_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    dots: true,
    responsive: [
      {
      breakpoint: 992,
      settings: {
      slidesToScroll: 4
      }
    },
    {
      breakpoint: 767,
      settings: {
      slidesToScroll: 2
      }
    },
//    {
//      breakpoint: 480,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    }
  ]
  });
	
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 23,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    simulateTouch: false,
    passiveListeners: false,
    resistance: false
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
      $(descr).toggleClass('active').find('.subfield').slideUp(100);
    }else{
      $('.js-field').removeClass('active').find('.subfield').slideUp(100);
      $(descr).toggleClass('active').find('.subfield').slideDown(100);
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
  
  // sticky parameters on product page
  
  if($('.final_parameters_container').length){
    $(document).on('scroll',function(){
      var finalP = $('.final_parameters_container').offset().top, 
            pos = $(window).height() + $(window).scrollTop()
      $('.final_parameters').toggleClass('static', finalP < pos);
    });
  }
  
  
  
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
  
  // menu_mobile
  
  var body = $('body');
  
  $('.menu_mobile').on('click', function (e) {
    e.preventDefault();
    if ($(this).next('.mobile_nav').hasClass('is-active')) {
      $('.mobile_nav').fadeOut(100);
      $(this).next('.mobile_nav').removeClass('is-active');
      body.removeClass('no-scroll');
    }
    else {
      $('.mobile_nav').fadeIn(300);
      $(this).next('.mobile_nav').addClass('is-active');
      body.toggleClass('no-scroll');
    }
    return false;
  });
  $('.overlay').on('click', function (){
    body.removeClass('no-scroll');
    $('.mobile_nav').removeClass('is-active').fadeOut(100);
    
  });
  
  $('.popup_close').on('click', function (e) {
    e.preventDefault();
    $('#js-menu').fadeOut(100);
    $('.js-toggle-menu, .js-search, .js-popupCall').removeClass('is-active');
    body.removeClass("no-scroll");
  });
  
  if($(window).width() < 993) {
    // media dropdown

    $('.js-field').on('click', function () {
      if($(this).hasClass('active')){
        $(this).toggleClass('active').find('.filters_wrap').slideUp(200);
      }else{
        $('.js-field').removeClass('active').find('.filters_wrap').slideUp(100);
        $(this).toggleClass('active').find('.filters_wrap').slideToggle(200);
        $('.js-dropdown').removeClass('active').next('.dropdown_block').slideUp(100);
        $('.js-dropdown').click(function(e){
          e.stopPropagation();
        });
      }
    });
    
  }
  
    if($(window).width() < 768) {
    // slider on product page

    $('.photo_frame .main_image').slick({
      dots: true,
      arrows: false
    }); 
    
  }
  
  
});

// sticky
if($('#js-filters').length){
(function () {
	var a = document.querySelector('#js-filters')
		, b = null
		, P = 0;
	window.addEventListener('scroll', Ascroll, false);
	document.body.addEventListener('scroll', Ascroll, false);

	function Ascroll() {
		if (b == null) {
			var Sa = getComputedStyle(a, '')
				, s = '';
			for (var i = 0; i < Sa.length; i++) {
				if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
					s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
				}
			}
			b = document.createElement('div');
			b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
			a.insertBefore(b, a.firstChild);
			var l = a.childNodes.length;
			for (var i = 1; i < l; i++) {
				b.appendChild(a.childNodes[1]);
			}
			a.style.height = b.getBoundingClientRect().height + 'px';
			a.style.padding = '0';
			a.style.border = '0';
		}
		var Ra = a.getBoundingClientRect()
			, R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);
		if ((Ra.top - P) <= 0) {
			if ((Ra.top - P) <= R) {
				b.className = 'stop';
				b.style.top = -R + 'px';
			}
			else {
				b.className = 'sticky';
				b.style.top = P + 'px';
			}
		}
		else {
			b.className = '';
			b.style.top = '';
		}
		window.addEventListener('resize', function () {
			a.children[0].style.width = getComputedStyle(a, '').width
		}, false);
	}
//	if (window.matchMedia("(max-width: 1024px)").matches) {
//			window.removeEventListener('scroll', Ascroll ,false);
//			document.body.removeEventListener('scroll', Ascroll ,false);
//	}
})();
(function () {
	var a = document.querySelector('#js-fixCat')
		, b = null
		, P = 0;
	window.addEventListener('scroll', Ascroll, false);
	document.body.addEventListener('scroll', Ascroll, false);

	function Ascroll() {
		if (b == null) {
			var Sa = getComputedStyle(a, '')
				, s = '';
			for (var i = 0; i < Sa.length; i++) {
				if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
					s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
				}
			}
			b = document.createElement('div');
			b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
			a.insertBefore(b, a.firstChild);
			var l = a.childNodes.length;
			for (var i = 1; i < l; i++) {
				b.appendChild(a.childNodes[1]);
			}
			a.style.height = b.getBoundingClientRect().height + 'px';
			a.style.padding = '0';
			a.style.border = '0';
		}
		var Ra = a.getBoundingClientRect()
			, R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);
		if ((Ra.top - P) <= 0) {
			if ((Ra.top - P) <= R) {
				b.className = 'stop';
				b.style.top = -R + 'px';
			}
			else {
				b.className = 'sticky';
				b.style.top = P + 70 + 'px';
			}
		}
		else {
			b.className = '';
			b.style.top = '';
		}
		window.addEventListener('resize', function () {
			a.children[0].style.width = getComputedStyle(a, '').width
		}, false);
	}
	if (window.matchMedia("(max-width: 767px)").matches) {
			window.removeEventListener('scroll', Ascroll ,false);
			document.body.removeEventListener('scroll', Ascroll ,false);
	}
})();
}