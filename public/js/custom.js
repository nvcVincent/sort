 // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
	
		
		// #navbar appears after scrolling	
		(function ($) {
	  $(document).ready(function(){
		
		// hide .navbar first
		$(".navbar").hide();
		
		// fade in .navbar
		$(function () {
			$(window).scroll(function () {
				// set distance user needs to scroll before we fadeIn navbar
				if ($(this).scrollTop() > 500) {
					$('.navbar').fadeIn();
				} else {
					$('.navbar').fadeOut();
				}
			});

		
		});

	});
	  }(jQuery));
	  
	  

  
  
  
<!-- Image Gallery -->  
  
            $(document).ready(function ($) {
                // delegate calls to data-toggle="lightbox"
                $(document).on('click', '[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', function(event) {
                    event.preventDefault();
                    return $(this).ekkoLightbox({
                        onShown: function() {
                            if (window.console) {
                                return console.log('Checking our the events huh?');
                            }
                        },
						onNavigate: function(direction, itemIndex) {
                            if (window.console) {
                                return console.log('Navigating '+direction+'. Current item: '+itemIndex);
                            }
						}
                    });
                });

                //Programmatically call
                $('#open-image').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });

				// navigateTo
                $(document).on('click', '[data-toggle="lightbox"][data-gallery="navigateTo"]', function(event) {
                    event.preventDefault();

                    return $(this).ekkoLightbox({
                        onShown: function() {

							this.modal().on('click', '.modal-footer a', function(e) {

								e.preventDefault();
								this.navigateTo(2);

                            }.bind(this));

                        }
                    });
                });


                /**
                 * Documentation specific - ignore this
                
                anchors.options.placement = 'left'; 
                anchors.add('h3');*/
                $('code[data-code]').each(function() {

                    var $code = $(this),
                        $pair = $('div[data-code="'+$code.data('code')+'"]');

                    $code.hide();
                    var text = $code.text($pair.html()).html().trim().split("\n");
                    var indentLength = text[text.length - 1].match(/^\s+/)
                    indentLength = indentLength ? indentLength[0].length : 24;
                    var indent = '';
                    for(var i = 0; i < indentLength; i++)
                        indent += ' ';
                    if($code.data('trim') == 'all') {
                        for (var i = 0; i < text.length; i++)
                            text[i] = text[i].trim();
                    } else  {
                        for (var i = 0; i < text.length; i++)
                            text[i] = text[i].replace(indent, '    ').replace('    ', '');
                    }
                    text = text.join("\n");
                    $code.html(text).show();

                });
            });