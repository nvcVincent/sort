Template.request.rendered=function() {
	$('#datepicker').datepicker().on('change', function(){
        $('.datepicker').hide();
    });
	$('#datepickerend').datepicker().on('change', function(){
        $('.datepicker').hide();
    });
}


Template.profile.onRendered(function () {
  $('#myslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});