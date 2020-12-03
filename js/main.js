$("#open").click(function () {
  $(".container").addClass("show-nav");
  $(window).scroll(noScroll);
});
$("#close").click(function () {
  $(".container").removeClass("show-nav");
  $(window).unbind("scroll", noScroll);
});

function noScroll() {
  window.scrollTo(0, 0);
}
