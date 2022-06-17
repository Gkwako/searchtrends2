// HAMBURGER MENU -----
console.log(" hamburger menu ");


//Get the button:
mybutton = document.getElementById("scrollDown");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



// a IN HAMBURGER MENU TOGGLE IN PAGINA -----
$( '.menu-2 a' ).on("click", function(){
	$('.menu').click();
	console.log(" menu gone");
});




// CAROUSEL -----
console.log(" carousel ");

$(".carousel").owlCarousel({
	margin: 20,
	loop: true,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			nav: false
		},
		600: {
			items: 2,
			nav: false
		},
		1000: {
			items: 3,
			nav: false
		}
	}
});


// GOOGLE MAPS -----
console.log(" map ");

var map = L.map('map').setView([52.473290, 4.827750], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.473290, 4.827750]).addTo(map)
	.bindPopup('P. Jonker Electrotechniek')
	.openPopup();





