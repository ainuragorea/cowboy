$(document).ready(function ($){
  //   var allPanels = $('.accordion > dd').hide();
    
  // $('.accordion > dt > a').click(function() {
  //   allPanels.slideUp();
  //   $(this).parent().next().slideDown();
  //   return false;
  // });
  var acc = document.getElementsByClassName("accordion");
  var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


  new Swiper('#cards', {
    loop: false,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 3,
    breakpoints: {
      1290: {
        slidesPerView: 3
      },
      1275: {
        slidesPerView: 2.9
      },
      1200: {
        slidesPerView: 2.8

      },
      1100: {
        slidesPerView: 2.8
      }, 
      1000: {
        slidesPerView: 2.56
      },
      900: {
        slidesPerView: 2.3
      },
      870: {
        slidesPerView: 2.3
      },
      800: {
        slidesPerView: 2.3
      },
      750: {
        slidesPerView: 2.3
      },

      700: {
        slidesPerView: 2.18
      },
      600: {
        slidesPerView: 1
      }
    },
    spaceBetween: 12,
    grabCursor: true,
    freeMode: true,
  });

  new Swiper('#mobile', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
  });

  $('.wraper-btn .point').click(function () {
    var imageLink = $(this).data('image');
    $('.wraper-btn .point.selected').removeClass('selected')
    
    $('.bike').css({
      backgroundImage: 'url('+imageLink+')'
    });

    $(this).addClass('selected')
  });

  var reviewAuthors = [
    {
      name: 'Christopher Craig ', 
      job: 'Professional rider',
      image: './img/customer.png'
    },
    {
      name: 'David Fox', 
      job: 'Professional rider',
      image: './img/another1.png'
    },
    {
      name: 'Jane Ostin', 
      job: 'Professional rider',
      image: './img/another2.png'
    },
    {
      name: 'Johnny Depp', 
      job: 'Actor',
      image: './img/another3.png'
    },
  ]

  new Swiper('#review', {
    loop: false,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.authors',
      type: 'bullets',
      bulletActiveClass: 'active',
      renderBullet: function (index, className) {
        console.log(index, className)
        return '<div class="customer '+className+'">'+
                '<div class="img">'+
                    '<img src="'+reviewAuthors[index].image+'" alt="">'+
                '</div>'+
                
                '<div class="h">'+
                    '<h4>'+reviewAuthors[index].name+'</h4>'+
                    '<h5>'+reviewAuthors[index].job+'</h5>'+
                '</div>'+
    
            '</div>'
      }
    },
  });

  const burger = document.getElementById('burger')
  const nav = document.getElementById('nav')

  burger.addEventListener('click', function () {
      console.log('burger.click', nav.style.display)
      
      if (nav.style.display === 'block') {
          nav.style.display = 'none'

      } else {
          nav.style.display = 'block'

      }
  })

  window.addEventListener('click', function($event){

    // nav.style.display = 'none'
    // console.log($event.path)
    var clickOnBurger = false
    $event.path.forEach(function(item) {
        // console.log(item.id)
        if (item.id === 'burger' ) {
            clickOnBurger = true
        }
    })
    // console.log(clickOnBurger)
    if (clickOnBurger === false) {
        nav.style.display = 'none'
    } 
} )


  

});

