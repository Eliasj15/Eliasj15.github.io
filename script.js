$(function () {
    $(document).scroll(function () {
      var $navbar = $(".navbar-inverse");
      $navbar.toggleClass("scrollPage", $(this).scrollTop() > $navbar.height());
    });
  });