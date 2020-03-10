$(document).ready(function() {
      $(".owl1").owlCarousel({
   	items: 1,
   	loop: true,
   	nav: true,
   	dots: false,
    navText: ["<img src='assets/images/arrow_left.png' alt='left' class='img-fluid' />", "<img src='assets/images/arrow_right.png' alt='right' class='img-fluid' />"]
        });

 $(".section6__input").on("focus", function() {
 	var lab = $(this).next(".section6__Label");
 	if (!lab.is(".section6__active")) {lab.addClass("section6__active");}
 });
$(".section6__input").on("blur", function() {
 	var lab1 = $(this).next(".section6__Label");
 	if ($(this).val() == "") {lab1.removeClass("section6__active");}
 });  

$('.section1').parallaxie({speed: 0.5});
$('.section4').parallaxie({speed: 0.5});

var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  percentPosition: true,
  layoutMode: 'masonry',
  masonry: {
  gutter: 10,
  columnWidth: 1
}
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});



$("#form1").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    phone: {
                        required: true
                    },
                    comment: {
                        required: true
                    }
                },
                messages: {
                    name: {
                        required: "Это поле должно быть заполнено!",
                        minlength: "Длина поля должна быть не менее 2 символов!"
                    },                   
                    phone: {
                        required: "Это поле должно быть заполнено!"
                    },
                    comment: {
                        required: "Это поле должно быть заполнено!"
                    }
                },
                submitHandler: function (form) {
                    var th = $(form);
		$.ajax({
			type: "POST",
			url: th.attr("action"), 
			data: th.serialize()
		}).done(function() {
			alert("Форма была успешно отправлена!");
			setTimeout(function() {
				th.trigger("reset");
			}, 2000);
		});
		return false;
                        }
        });

});     

    