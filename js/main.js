

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Test-i Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 60
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 900;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
            document.getElementById('logo').src='img/logo-top-white.png';
        } else {
            $('.navbar-default').removeClass('on');
            document.getElementById('logo').src='img/logo-top.png';
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#Clients, #Projects").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
		   autoPlay: 3000, //Set AutoPlay to 3 seconds
		   
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	 

  	});
	
	
	
	
	
	


 /*====================================
    video
    ======================================
$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});


 /*====================================
    counter
    ======================================*/
	
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 500) {
        $(window).off("scroll", startCounter);
$('.Count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

	}
}


//$(window).scroll(startCounter);
//function startCounter() {
//    if ($(window).scrollTop() > 200) {
//        $(window).off("scroll", startCounter);
//        $('.Count').each(function () {
//            var $this = $(this);
//            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//                duration: 1000,
//                easing: 'swing',
//                step: function () {
//                    $this.text(Math.ceil(this.Counter));
//                }
//            });
//        });
//    }
//}




/*====================================
owlCarousel
    ======================================*/

$(document).ready(function() {
 
  $("#team2").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 2,
      
 
  });
 
});








/*=====================================
calender
*/
$(document).ready(function() {
  // page is now ready, initialize the calendar...
  // options and github  - http://fullcalendar.io/

/*$('#calendar').fullCalendar({
   // dayClick: function() {
    //    alert('a day has been clicked!');
    //}
});*/

});
/*========================================
Video
=========================================*/



//var vid = document.getElementById("bgvid");
//var pauseButton = document.querySelector("#polina button");

//function vidFade() {
//  vid.classList.add("stopfade");
//}

//vid.addEventListener('ended', function()
//{
// only functional if "loop" is removed 
//vid.pause();
// to capture IE10
//vidFade();
//}); 








  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());
    

/*-------------------------------------------------------------------------------------------------CUSTOM------------------------------------------------------------------------------------------------------*/
    
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
    
if (mobilecheck()){
   $('.navbar-default').addClass('on');
   document.getElementById('logo').src='img/logo-top-white.png';
} 

if (window.innerWidth > 1000 && (window.location.href=='http://eestec.ee.duth.gr/' || window.location.href=='http://eestec.ee.duth.gr/index.html#hero')){
    $(document).ready(function() {
        setTimeout(function(){
            document.getElementById('modal-btn').click();
        }, 3000)
    });
}

/*new ResizeSensor(jQuery('.portfolio-item'), function(){ 
    if (getElementsByClassName("portfolio-item")[0].width < 270) {
		getElementsByClassName('hover-text').addClass('hidden');
	}
});*/
    

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
}
main();