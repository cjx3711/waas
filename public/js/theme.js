
(function($) {
  "use strict"; // Start of use strict

  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function(){
          $('.navbar-toggle:visible').click();
  });


  // Floating label headings for the contact form
  $(function() {
      $("body").on("input propertychange", ".form-group", function(e) {
          $(this).toggleClass("with-value", !!$(e.target).val());
      }).on("focus", ".form-group", function() {
          $(this).addClass("with-focus");
      }).on("blur", ".orm-group", function() {
          $(this).removeClass("with-focus");
      });
  });

  $('body').on("click", "#toggle-message", function() {
    $("#update-form").slideUp();
    $("#message-form").slideDown();
  });

  $('body').on("click", "#toggle-updates", function() {
    $("#update-form").slideDown();
    $("#message-form").slideUp();
  });


  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
})(jQuery); // End of use strict
