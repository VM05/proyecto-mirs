
$("#terminos-y-condiciones").on('click',function(e){
  e.preventDefault();
  $('.modal-terminos').css('display','flex');
  $('body,html').css('overflow','hidden');
});

$(".modal-terminos").on('click',function(e){
  e.preventDefault();
  if(!e.target.closest(".modal-mensaje-terminos")){
    $('.modal-terminos').css('display','none');
  }
  $('body,html').css('overflow','auto');
})

$(".close").on('click',function(e){
  e.preventDefault();
    $('.modal-terminos').css('display', 'none');
    console.log('hola');
    $('body,html').css('overflow','auto');
})



const hamburguesa = document.querySelector('.burger');

hamburguesa.addEventListener('click', mostrarMenu)

function mostrarMenu() {

    const menuModal = document.querySelector('.menu-modal');
    hamburguesa.classList.toggle("change");
    menuModal.classList.toggle('menu-activo');
    if(menuModal.classList.contains('menu-activo')){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';

    }
    
}

$('.banner-principal').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  });

  $('.carrusel-map').slick({
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-next-arrows prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="prev-next-arrows next-arrow"><i class="fas fa-chevron-right"></i></button>',
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.noticias-carrusel-mobile').slick({
    autoplay:false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

var rev = $('.rev_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');  
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');  
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  var
    cur = $(slick.$slides[nextSlide]);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),  
  prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
}); 


  rev.slick({
    autoplay: true,
    speed: 1000,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    prevArrow: '<button class="prev-next-arrows prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="prev-next-arrows next-arrow"><i class="fas fa-chevron-right"></i></button>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    customPaging: function(slider, i) {
      return '';
      
    },responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    /*infinite: false,*/
  });
  
 
  $('.carrusel-historia').slick({
    autoplay:false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-next-arrow-historia prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="prev-next-arrow-historia next-arrow"><i class="fas fa-chevron-right"></i></button>',
    arrows:false,
    fade:true,
    verticalDots:true,
    
    customPaging : function(slider, i) {
      var title = $(slider.$slides[i].children[0].children[0]).data('title');
      return '<button class="paginador-historia">'+title+'</button>';
},
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          dots:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          dots:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.carrusel-directorio-primera-linea-mobile').slick({
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-next-arrows prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="prev-next-arrows next-arrow"><i class="fas fa-chevron-right"></i></button>',
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.carrusel-ejecutivos').slick({
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-next-arrows prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="prev-next-arrows next-arrow"><i class="fas fa-chevron-right"></i></button>',
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.carrusel-clientes').slick({
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-next-arrows prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="prev-next-arrows next-arrow"><i class="fas fa-chevron-right"></i></button>',
    arrows:true,
    centerMode:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

    $('.carrusel-casos-exito').slick({
    autoplay:false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-next-arrows prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="prev-next-arrows next-arrow"><i class="fas fa-chevron-right"></i></button>',
    arrows:true,
    centerMode:true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });  


  $('.carrusel-fotos').slick({
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-next-arrows prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="prev-next-arrows next-arrow"><i class="fas fa-chevron-right"></i></button>',
    arrows:true,
    centerMode:false,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });  

  $('.carrusel-fotos-producto').slick({
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-next-arrows prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="prev-next-arrows next-arrow"><i class="fas fa-chevron-right"></i></button>',
    arrows:true,
    centerMode:true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });  


  var $slider = $('.carrusel-fotos');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });

  
/*   $('.carrusel-fotos .slick-cloned div.item-carrusel-imagen a').each(function(){
    $('.carrusel-fotos .slick-cloned div.item-carrusel-imagen a').removeAttr('data-lightbox');

  }) */


  
  
