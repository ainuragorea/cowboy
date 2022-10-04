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
    spaceBetween: 12,
    grabCursor: true,
    freeMode: true,
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

  

});

