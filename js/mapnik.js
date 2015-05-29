$(function() {
    // Sign up form at the bottom of posts.

    $('body').scrollspy({ target: '.toc' });
    $('.toc-wrap').affix({
      offset: {
        top: function () {
          return (this.top = $('.splash').outerHeight(true))
        },
        bottom: function () {
          return (this.bottom = $('.footer').outerHeight(true) + $('#guide-footer').outerHeight(true))
        }
      }
    })

});

/* Previous attempt

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#navbar',
	offset: navHeight
});

// activate sidebar
$('#sidebar').affix({
  offset: {
    top: -90
  }
});

 */