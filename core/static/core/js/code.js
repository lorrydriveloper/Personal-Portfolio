// // preloaded animation to improve 
// $(window).on('load', function () {
//     $('.preloader').fadeOut(4500,function () {
//         $('body').css("overflow", "auto");
//     });
// },);

// // To scroll on reload to the top an show animation
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }


$(document).ready(function(){

  $(".overlay").hover(function(){
		$(this).toggleClass("show");
  });
  
  $('#more').click(function () {
    $('.more_description').slideToggle(1000);
  });
  $('#less').click(function () {
    $('.more_description').slideToggle(1000);
  });


  if (window.location.href.includes('Contact')) {
    $('.successful').css('display', 'initial')
  }

  $( "#send" ).click(function() {
    var plane = $( '#plane' );
    var success = $('.successful');
    flying();
    function show_success(){
      success.css('display', 'initial')
      plane.css('color','green');

    };

    function flying() {
      plane.animate({
        'margin-left': '50%',       
      
      },1000, show_success)
    }
  });
    
    $('.wrapper').slick({
        dots:true,
        autoplay:true,
    });
    $('.slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_nav'
      });
      $('.slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider_for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
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


