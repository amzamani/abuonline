(function($) { "use strict";

    $(function() {
        var header = $(".start-style");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });     
        
    //Animation
    
    $(document).ready(function() {
        $('body.hero-anime').removeClass('hero-anime');
    });

    //Menu On Hover
        
    $('body').on('mouseenter mouseleave','.nav-item',function(e){
            if ($(window).width() > 750) {
                var _d=$(e.target).closest('.nav-item');_d.addClass('show');
                setTimeout(function(){
                _d[_d.is(':hover')?'addClass':'removeClass']('show');
                },1);
            }
    }); 
    
    //Switch light/dark
    
    $("#switch").on('click', function () {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $("#switch").removeClass("switched");
        }
        else {
            $("body").addClass("dark");
            $("#switch").addClass("switched");
        }
    });  
    $(function() {
        $('').on('click', function(e) {
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
          
                // Store hash
                var hash = this.hash;
          
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                  scrollTop: $(hash).offset().top
                }, 8000, function(){
             
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
                });
              }
        });
      });


     


      $("a[href*=#]").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

    
    
  })(jQuery); 

  



