//load to the top of page
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
  }
//preloader

$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 5000;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
