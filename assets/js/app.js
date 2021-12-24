$(document).scroll(function () {
  100 < $(this).scrollTop()
    ? $(".scroll-to-top").fadeIn()
    : $(".scroll-to-top").fadeOut();
});
$("a.scroll-to-top").click(function (e) {
  $("html, body")
    .stop()
    .animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      1e3,
      "easeInOutExpo"
    ),
    e.preventDefault();
});
