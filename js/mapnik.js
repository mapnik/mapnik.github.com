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
