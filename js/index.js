// create variable
let logoMenu = document.getElementById('menu');
let nav = document.getElementById('nav');
let img = document.getElementById('slider');
let imgSlider = 1;
// end create variable


// Выпадающее menu
logoMenu.addEventListener('click',function () {
    nav.classList.toggle("toogle");
});
// end nav menu


/*Start Slick*/
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
    });
  });
/*End Slick*/

// Smooth scroll
// (function ($) {
//     $(".test").click(function () {
//       $("html, body").animate({
//         scrollTop: $($(this).attr("#our-benefits")).offset().top
//       },2000);
//       return false;
//     });
//   })($);

$(document).ready(function(){
    $('.test, .test2').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        console.log(scroll_el);
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});