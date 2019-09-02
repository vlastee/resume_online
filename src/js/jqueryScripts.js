// (function( $ ){
//     $.fn.autowidth = function() {
//       return this.each(function() {        
//           $('li', this).css({'width' : (100 / $('li', this).length) + '%'})
//       });
//     };
//   })( jQuery );
  
//   $(document).ready(function(){
//       $('nav > ul').autowidth();    
//   });

import mePhoto from '../img/MeSmall.jpg';

import $ from "jquery";
var sidebarCollapseButtons = $('button#sidebarCollapse').toArray();
$(document).ready(function () {
    $(sidebarCollapseButtons[0]).on('click', function () {
        
        $('#sidebar').toggleClass('active');
        $('div#content-button-collapse:eq(0)').toggleClass('active');
        $('div#resume-top-text h2').toggleClass('active').hide().show('slow');
        console.info("finished jquery  "+$(sidebarCollapseButtons[1]).html());
    });
});

$(document).ready(function () {
    $(sidebarCollapseButtons[1]).on('click', function () {
        
        $('#sidebar').toggleClass('active');
        $('div#resume-top-text h2').toggleClass('active').hide().show('slow');
        $('div#content-button-collapse:eq(0)').toggleClass('active');
        console.info("finished jquery2");
    });
});



$(document).ready(function () {
    var imageOfMe = $('<img class="sidebar-photo" src='+mePhoto+' alt="Volodymyr Vlasenko" height="130" width="130" ><h2 class="my-name-sidebar">Volodymyr Vlasenko</h2>').hide();
    $('#first-col-sidebar-header').append(imageOfMe);
    imageOfMe.show('slow');
});


import university1 from '../img/shev1.jpg';
import university2 from '../img/shev2.jpg';
import university3 from '../img/shev3.jpg';
$(document).ready(function () {
    var slideOfUniversity1 = $('<div class="carousel-item active"><img class="d-block w-100" src="'+university1+'" alt="First slide"></div>');
    var slideOfUniversity2 = $('<div class="carousel-item"><img class="d-block w-100" src="'+university2+'" alt="Second slide"></div>');
    var slideOfUniversity3 = $('<div class="carousel-item"><img class="d-block w-100" src="'+university3+'" alt="Third slide"></div>');
    $('div#taras-shevchenko-university').append(slideOfUniversity1, slideOfUniversity2, slideOfUniversity3);
});

$(document).ready(function () {
    var websiteShev = ('http://www.univ.kiev.ua/en/departments/recs/');
    $('button#shev-website-btn').on('click', function () {
        var win = window.open(websiteShev, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });
});

import college1 from '../img/ktep-1.jpg';
import college2 from '../img/ktep-2.jpg';
import college3 from '../img/ktep-3.jpg';
$(document).ready(function () {
    var slideOfUniversity1 = $('<div class="carousel-item active"><img class="d-block w-100" src="'+college1+'" alt="First slide"></div>');
    var slideOfUniversity2 = $('<div class="carousel-item"><img class="d-block w-100" src="'+college2+'" alt="Second slide"></div>');
    var slideOfUniversity3 = $('<div class="carousel-item"><img class="d-block w-100" src="'+college3+'" alt="Third slide"></div>');
    $('div#ktep-college').append(slideOfUniversity1, slideOfUniversity2, slideOfUniversity3);
});

$(document).ready(function () {
    var websiteKtep = ('http://xn--e1ajqk.kiev.ua/');
    $('button#ktep-website-btn').on('click', function () {
        var win = window.open(websiteKtep, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });
});

$(document).ready(function(){   
    var navControls = $('#navigation-controls li').toArray();
    
    // Add smooth scrolling to all links
    $("#navigation-controls a").on('click', function(event) {
        var clickedLink = $(this).closest('li');
        console.log( $(this).closest('li')); 
        $(this).closest('li').toggleClass('.active');
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
        $('#navigation-controls li').removeClass('active');
        $(clickedLink).toggleClass('active');
    });
  });


import website1 from '../img/website-1.jpg';
import website2 from '../img/website-2.jpg';
$(document).ready(function () {
    var slideOfwebsite1 = $('<div class="carousel-item active"><img class="d-block w-100" src="'+website1+'" alt="First slide"></div>');
    var slideOfwebsite2 = $('<div class="carousel-item"><img class="d-block w-100" src="'+website2+'" alt="Second slide"></div>');
    $('div#website1').append(slideOfwebsite1, slideOfwebsite2);
});

import websiteResume1 from '../img/websiteResume-1.jpg';
import websiteResume2 from '../img/websiteResume-2.jpg';
$(document).ready(function () {
    var slideOfwebsiteResume1 = $('<div class="carousel-item active"><img class="d-block w-100" src="'+websiteResume1+'" alt="First slide"></div>');
    var slideOfwebsiteResume2 = $('<div class="carousel-item"><img class="d-block w-100" src="'+websiteResume2+'" alt="Second slide"></div>');
    $('div#website2').append(slideOfwebsiteResume1, slideOfwebsiteResume2);
});

$(document).ready(function () {
    var websiteHappyWeekend = ('https://vlastee.github.io/');
    $('button#website1-website-btn').on('click', function () {
        var win = window.open(websiteHappyWeekend, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });
});

$(document).ready(function () {
    var websiteresume = ('#');
    $('button#website2-website-btn').on('click', function () {
        var win = window.open(websiteresume, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });
});

$(document).ready(function () {
    var websiteLinkedIn = ('https://www.linkedin.com/in/volodymyr-vlasenko-1140b8ab/');
    var websiteFacebook = ('https://www.facebook.com/vlastee');
    var websiteDiscord = ('Vlastee#6372');
    var websiteTelega = ('https://t.me/Vlastee');
    var websiteGitHub = ('https://github.com/vlastee');
    function clickFn(element ,website){
        $(element).on('click', function () {
            var win = window.open(website, '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        });
    };

    clickFn('.fa-facebook-square', websiteFacebook);
    clickFn('.fa-linkedin', websiteLinkedIn);
    clickFn('.fa-telegram', websiteTelega);
    clickFn('.fa-git-square', websiteGitHub);
});

$(function () {
    $('[data-toggle="popover"]').popover()
})



//import bg1 from '../img/bg1.jpg';
import bg2 from '../img/bg2.jpg';
$(document).ready(function () {
    // $('.sidebar-image').css(' background-image', 'url(' + bg1 + ') '); 
    // $('.sidebar-all').css('background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.83)),url('+ bg1 +');');
    $('.content-background-image').css('background-image', 'url(' + bg2 +')');
    // $('#content').css('background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.83)),url('+ bg2 +');');
});


(function($){
    $(window).on("load",function(){
      $(".mCustomScrollbar").mCustomScrollbar({
        theme:"light-3",
        setHeight: "20px",
        scrollButtons:{
          enable:true
        }
      });
    });
});



if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$('#back-to-top').mouseenter(function () {
    $(this).css({border: '0 solid #dfbe05'}).animate({
        borderWidth: 4
    }, 500);
}).mouseleave(function () {
     $(this).animate({
        borderWidth: 0
    }, 500);
});


$(document).ready(function () {
	$('.item-match-height').matchHeight({ property: 'min-height' });
});



// new webpack.ProvidePlugin({ // inject ES5 modules as global vars
//     $: 'jquery',
//     jQuery: 'jquery',
//     'window.jQuery': 'jquery',
//     Tether: 'tether'
//   });