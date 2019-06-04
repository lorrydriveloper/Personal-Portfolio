// preloaded animation to improve 
$(window).on('load', function () {
    $('.preloader').fadeOut(4500,function () {
        $('body').css("overflow", "auto");
    });
},);

// To scroll on reload to the top an show animation
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


$(document).ready(function(){
    
    $('.wrapper').slick({
        dots:true,
        autoplay:true,
    });
  });

const toggleNav = document.querySelector('.util-btn');
const navbar = document.querySelector('.navigation');
const items = document.querySelectorAll('nav li');
var active = true;

    
function animation(index) {
        items[index].classList.remove('slide-in-nav-item-reverse');
        items[index].classList.add('slide-in-nav-item');
        index++;
        if (index < items.length) {
            setTimeout(animation, 150, index);
        }
        
    }
function animationReverse(x) {
    items[x].classList.replace('slide-in-nav-item', 'slide-in-nav-item-reverse');
    if (x > 0 ) {
    x--;
        setTimeout(animationReverse, 150, x);
    }
    else{
        setTimeout(() => {
            navbar.classList.toggle('navigation--is-visible');
            toggleNav.classList.toggle('nav-aside__cta--active');
        }, 700);
    active = true;
        
    }
}    

toggleNav.addEventListener('click', () => {
    if(active){
        navbar.classList.toggle('navigation--is-visible');
        toggleNav.classList.toggle('nav-aside__cta--active');
        animation(0); 
        active = false;
        
    }
    else{
        animationReverse(4);
    }
});


/*
	Smooth scroll functionality for anchor links (animates the scroll
	rather than a sudden jump in the page)
*/

$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });    
