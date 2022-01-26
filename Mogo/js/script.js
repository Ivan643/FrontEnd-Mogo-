//АККОРДИОН

$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('#accordeon .acc-head').on('click', f_acc);
});
function f_acc(){
//скрываем все кроме того, что должны открыть
  $('#accordeon .acc-body').not($(this).next()).slideUp(500);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);
}



//ПЛАВНЫЙ СКРОЛЛ ИЗ МЕНЮ НАВИГАЦИИ


$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		/*
    $("#menu a").removeClass('active');
		$(this).addClass('active');
    */
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

});



//КНОПКА СКРОЛЛА В РАЗДЕЛ НАВИГАЦИИ САЙТА

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });


  //КНОПКА СКРОЛЛА В РАЗДЕЛ НАВИГАЦИИ САЙТА (MOGO)

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top_2').fadeIn();
      else $('#top_2').fadeIn();
    });
    $('#top_2').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

/*FIXED HEADER*/
 $(function () {
  	var introH = $("#intro").innerHeight(),
  	 	header = $("#header"),
  	 	scrollOffset = $(window).scrollTop();
  	checkScroll(scrollOffset);
  $(window).on("scroll", function() {
  	scrollOffset = $(this).scrollTop();
  	checkScroll(scrollOffset);
  });
function checkScroll (scrollOffset) {
  	if (scrollOffset >= introH-1) {
  		header.addClass('fixed');
  	} else {
  		header.removeClass('fixed');
  	}
}
});


 /* MENU NAV TOGGLE*/

 $("#nav_toggle").on('click', function(event){
 	event.preventDefault();
 	$('#nav_toggle').toggleClass('active');
 	$('#menu').toggleClass('active');
 });


