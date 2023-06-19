window.onload = function () {
  $(".loading").fadeOut(1000);
  add();
}
function add() {
  var a1 = $(".p-left");
  var a2 = $(".p-right");
  var a3 = $(".logo");
  var a4 = $(".downlaod");
  setTimeout(function () { a1.addClass('bounceInLeft') }, 800);
  setTimeout(function () { a2.addClass('bounceInRight') }, 1100);
  setTimeout(function () { a3.addClass('bounceInUp') }, 1400);
  setTimeout(function () { a4.addClass('bounceInUp') }, 1700);
}

$(document).ready(function () {

  //carousel 手機滑動
  $(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > 5) {
        $(this).carousel('next');
      }
      else if (Math.floor(xClick - xMove) < -5) {
        $(this).carousel('prev');
      }
    });
    $(".carousel").on("touchend", function () {
      $(this).off("touchmove");
    });
  })

  //進度百分比
  var num = $('.num span').text();
  var w = num / 500;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $('.js-progress').offset().top) {
      $('.progress-bar').css('width', w + '%');
      if (w >= 10) {
        $('.gift-progress li:eq(0)').addClass('on');
      }
      if (w >= 20) {
        $('.gift-progress li:eq(0)').addClass('on');
        $('.gift-progress li:eq(1)').addClass('on');
      }
      if (w >= 40) {
        $('.gift-progress li:eq(0)').addClass('on');
        $('.gift-progress li:eq(1)').addClass('on');
        $('.gift-progress li:eq(2)').addClass('on');
      }
      if (w >= 100) {
        $('.gift-progress li').addClass('on');
      }
    }
  });

  //進度條內容高度
  var progressH = $('.gift-progress li:eq(0)').height();
  $('.gift-progress').css('height', progressH + 15);
  $(window).resize(function () {
    var progressH = $('.gift-progress li:eq(0)').height();
    $('.gift-progress').css('height', progressH + 15);
  });

  //翻牌動作
  $('.js-btn').on("click", function (e) {
    e.preventDefault();
    $(this).parent('.btn-start').fadeOut(500)
      .siblings('.card-option').find('img:eq(0)').delay(5000).each(function (index) {
        $(this).delay(index * 300).animate({
          opacity: 0
        }, 300)
      });

    var card = $(this).parent().siblings('.card-option').find('img:eq(1)');
    console.log(card);
    card.delay(5000).each(function (index) {
      $(this).delay(index * 300).animate({
        opacity: 1
      }, 0, function () {
        $(this).addClass('flipInY')
      })
    })
  });

  // video Modal

  // Gets the video src from the data-src on each button
  var $videoSrc;
  $('.video-btn').on("click", function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it  
  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })

  // stop playing the youtube video when I close the modal
  $('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc);
  })

  // $.fn.snow({
  //   // maxSize: 50, 
  //   // newOn: 100 
  // })
});


// $(function () {
//   $up();
//   setInterval(function(){
//     $up();
//   },5000)

// function $up() {
//   $('.drink div').removeClass('up').each(function (index) {
//     $(this).delay(index * 200).animate({
//       'background': 'transparent'
//     }, 0, function () {
//       $(this).addClass('up')
//     })
//   })
// }


/**
 * jquery.snow - jQuery Snow Effect Plugin
 *
 * Available under MIT licence
 *
 * @version 1 (21. Jan 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColor - color of snowflake, #FFFFFF by default
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 */
(function ($) {
  $.fn.snow = function (options) {
    var $flake = $('<img src="images/light.png"/>').css({ 'position': 'absolute', 'top': '0', 'z-index': '999' }),
      documentHeight = $(window).height(),
      documentWidth = $(window).width(),
      defaults = {
        minSize: 3,
        maxSize: 8,
        newOn: 500
      },
      options = $.extend({}, defaults, options);
  
  
    var interval = setInterval(function () {
      var
        startPositionLeft = Math.random() * documentWidth,
        startOpacity = 0.5 + Math.random(),
        sizeFlake = options.minSize + Math.random() * options.maxSize,
        // endPositionTop = documentHeight - 200,
        endPositionTop = 0,
        endPositionLeft = startPositionLeft+ Math.random() * 200,
        durationFall = documentHeight * 10 + Math.random() * 5000;
      $flake
        .clone()
        .appendTo('.snow')
        .css(
          {
            left: startPositionLeft,
            top: documentHeight,//開始的值 預設為 top:0;
            opacity: startOpacity,
            'width': sizeFlake,
            color: options.flakeColor
          }
        )
        .animate(
          {
            top: endPositionTop,//結束的值
            left: endPositionLeft
          },
          durationFall,
          'linear',
          function () {
            $(this).remove();
          }
        );
    }, options.newOn);
  };
})(jQuery);


$.fn.snow({
  //  maxSize: 50, 
  //  newOn: 100 
})

//# sourceMappingURL=script.js.map
