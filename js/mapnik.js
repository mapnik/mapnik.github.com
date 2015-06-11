// tabs
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

// figure out the height
var mainContent = $("#main-content");
var aside = $("#aside");
var height = mainContent.outerHeight();

if (height > aside.outerHeight()) {
  // load in more sidebar content
  console.log("i see you.");
}