$(document).ready(function(){
	  // слайдер
 function htmSlider(){

  var slideWrap = $('.slider__wrap');

  var nextLink = $('.slider__arow_next');
  var prevLink = $('.slider__arow_prev');

		
   // Клик по ссылке на следующий слайд 
  nextLink.click(function(){
    slideWrap.animate({left: slideWrap.position().left - $('.slider__item').outerWidth()}, 500, function(){
     slideWrap
      .find('.slider__item:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    });
   
  });

   // Клик по ссылке на предыдующий слайд 
  prevLink.click(function(){
    slideWrap
     .css({'left': slideWrap.position().left - $('.slider__item').outerWidth()})
     .find('.slider__item:last')
     .prependTo(slideWrap)
     .parent()
     .animate({left: 0}, 500);
   
  });
		
   // Функция автоматической прокрутки слайдера 
  function autoplay(){
    slideWrap.animate({left: slideWrap.position().left - $('.slider__item').outerWidth()}, 500, function(){
     slideWrap
      .find('.slider__item:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    });
   
  };
		
var timer = setInterval(autoplay, 5000);

 $('.slider').hover(function() {
        clearInterval(timer);
     }, function() {
        timer = setInterval(autoplay, 5000);
    });

 };
 
  // иницилизация функции слайдера 
 htmSlider();

 //кнопка выпадающего меню
   $('.menu-open').click(function () {
    $('.menu-open__global_top').toggleClass('menu-open__global_top_open');
    $('.menu-open__global_middle').toggleClass('menu-open__global_middle_open');
    $('.menu-open__global_bottom').toggleClass('menu-open__global_bottom_open');
    $('.menu_navigation').toggleClass('menu_navigation_open');
    $('.nav__list').slideToggle(200);
  });

   	// прилипающий хедер
 $(window).scroll(function () {
	var scroll = $(this).scrollTop();
	var top = $('.nav').position().top;
	if ($(window).outerWidth() > 991 && $(window).height() > 414) {

		if (top <= scroll) {
			$('.nav').css({
				"position": "fixed",
				"top": "0"
			});
			$('.head').css('padding-top', '45px');
		};
	};
});


 	// открыте меню в сайдебаре
 $('.sidebar__item').click(function openMenu() {
 		$(this).find('.sidebar__items_2').slideToggle();
 		$('.sidebar__item').not($(this)).find('.sidebar__items_2').slideUp();
 	});


 	// калькулятор
 function calculator() {
 	var square = Number($('#cost').val());
 	var best = Number($('.calculator__radio:checked').attr('id'));
 	$('#result').removeClass('calculator__result_open');
 	$('#square').removeClass('calculator__result_open');
 	$('#area').removeClass('calculator__result_open');
 	if (square >= 10 && square <= 200) {
 		if (best >= 1 && best <= 3) {
 		
 			if (square >= 10 && square <= 50) {
 				var price = square * 10000;
 			};
 			if (square >= 51 && square <= 100) {
 				var price = square * 15000;
 			};
 			if (square >= 101 && square <= 200) {
 				var price = square * 20000;
 			};
 			if (best == 1) {
 				var result = price;
 				$('#price').html(result);
 			};
 			if (best == 2) {
 				var result = price * 1.25;
 				$('#price').html(result);
 			};
 			if (best == 3) {
 				var result = price * 1.5;
 				$('#price').html(result);
 			};
 			$('#result').addClass('calculator__result_open');
 		} else {
 			$('#area').addClass('calculator__result_open');
 		}
 	} else {
 			$('#square').addClass('calculator__result_open');
 		}
};
 $('.calculator__btn').click(function () {
 	calculator();
 });


 	// всплывающие окна
 function closePopup() {
 	 $('.popup').removeClass('popup_open').addClass('popup_close');
 };
 $('.popup__closer').click(function () {
 	closePopup();
 });
 $('.popup__ok').click(function () {
 	closePopup();
 });
  function openPopup(content, color) {
 	 $('.popup').addClass('popup_open').removeClass('popup_close')
 	 .css('background-color', color);
 	 $('.popup__text').html(content);
 };

 $('.menu__item:nth-child(1)').click(function () {
 	openPopup('Привет всем!', 'blue');
 });
 $('.menu__item:nth-child(2)').click(function () {
 	openPopup('Сожалеем, ошибка: пожалуйста, обновите страницу и попробуйте позже.', 'green');
 });
 $('.menu__item:nth-child(3)').click(function () {
 	openPopup('<ol><li>Дом</li><li>Дача</li><li>Пентхаус</li></ol>', 'red');
 });
})