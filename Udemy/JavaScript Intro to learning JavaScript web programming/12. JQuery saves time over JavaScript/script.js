var myNumber = 0;
$(function () {
  $('.col-md-3').on({
    mouseenter: function () {
      $(this).css('background-color', 'teal');
    },
    mouseleave: function () {
      $(this).css('background-color', 'white');
    }
  });
});