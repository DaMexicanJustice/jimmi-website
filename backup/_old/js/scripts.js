$(document).ready(function() {
	
	
	$(document).on('click', '.slideTrigger', function(){
		
		
		$('.slideTrigger').removeClass('active');
		$(this).addClass('active');
		
		var id = $(this).data('id');
		
		$('.owl-carousel').hide();
		$('#slide'+id).show();
		
	});
	
	$(document).on('click', '#activator', function(){
		$('#fullMenu').toggleClass('open');
	});
	
	$(document).on('click', '#closeMenu', function(){
		$('#fullMenu').removeClass('open');
	});	
	
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#goUp').addClass('open');
        }
        else {
            $('#goUp').removeClass('open');
        }
    });
	
	
    $('#goUp').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500, function () {
            $('#goUp').removeClass('open');
        });
    });	


    $('.scrollToMenu').click(function (e) {
        e.preventDefault();

        var sektion = $(this).attr('href');
        $('#fullMenu').removeClass('open');
        scrollToSection('#' + sektion);
    });
	
	
  var owl = $('.owl-carousel');
	  owl.owlCarousel({
			margin: 92,
			nav: true,
		  pagination: false,
		  dots: false,
		  navText: ["<img src='../img/arrow_left.svg'>","<img src='../img/arrow_right.svg'>"],
			loop: true,
			responsive: {
			  0: {
				items: 1
			  },
			  991: {
				items: 1
			  },
			  1200: {
				items: 2
			  },
				1400: {
					items:2
				}
			}
  		});
});


function scrollToSection(section) {

    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 1000);

}