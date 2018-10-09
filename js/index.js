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
        autoplaySpeed: 15000,
    });
  });
/*End Slick*/