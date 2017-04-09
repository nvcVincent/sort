Template.request.onRendered(function() {
    this.$('#datetimepicker').datetimepicker({
		format: 'DD/MM/YY'
	});
    this.$('#datetimepicker2').datetimepicker({
		format: 'DD/MM/YY'
	});
	
	$(document).ready(function(){
    $('[id^=number-attendee').keypress(validateNumber);
	});
	
	$(document).ready(function(){
    $('[id^=phone').keypress(validateNumber);
	});

	function validateNumber(event) {
		var key = window.event ? event.keyCode : event.which;
		if (event.keyCode === 8 || event.keyCode === 46) {
			return true;
		} else if ( key < 48 || key > 57 ) {
			return false;
		} else {
			return true;
		}
	};    
});

	
Template.step3.onRendered(function() {	
	$(function(){
		var requiredCheckboxes = $('.options :checkbox[required]');
		requiredCheckboxes.change(function(){
			if(requiredCheckboxes.is(':checked')) {
				requiredCheckboxes.removeAttr('required');
			} else {
				requiredCheckboxes.attr('required', 'required');
			}
		});
	});
});

	
Template.step4.onRendered(function() {	
	var password = document.getElementById("password")
	  , confirm_password = document.getElementById("confirm-password");

	function validatePassword(){
	  if(password.value != confirm_password.value) {
		confirm_password.setCustomValidity("Password not match!");
	  } else {
		confirm_password.setCustomValidity('');
	  }
	}

	password.onchange = validatePassword;
	confirm_password.onkeyup = validatePassword;
});
	
	
Template.profile.onRendered(function () {
  $('#myslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});

Template.uinfo.onRendered(function() {	
	$(document).ready(function(){
    $('[id^=phone').keypress(validateNumber);
	});

	function validateNumber(event) {
		var key = window.event ? event.keyCode : event.which;
		if (event.keyCode === 8 || event.keyCode === 46) {
			return true;
		} else if ( key < 48 || key > 57 ) {
			return false;
		} else {
			return true;
		}
	};    
});

Template.dashboard2.onRendered(function() {	
	$(document).ready(function(){
    $('[id^=price').keypress(validateNumber);
	});

	function validateNumber(event) {
		var key = window.event ? event.keyCode : event.which;
		if (event.keyCode === 8 || event.keyCode === 46) {
			return true;
		} else if ( key < 48 || key > 57 ) {
			return false;
		} else {
			return true;
		}
	};    
});

Template.info.onRendered(function() {	
	$(document).ready(function(){
    $('[id^=postcode').keypress(validateNumber);
	});
	
	$(document).ready(function(){
    $('[id^=phone').keypress(validateNumber);
	});
	
	$(document).ready(function(){
    $('[id^=phone2').keypress(validateNumber);
	});

	function validateNumber(event) {
		var key = window.event ? event.keyCode : event.which;
		if (event.keyCode === 8 || event.keyCode === 46) {
			return true;
		} else if ( key < 48 || key > 57 ) {
			return false;
		} else {
			return true;
		}
	};    
});