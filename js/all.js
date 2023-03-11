//Get the button:
mybutton = document.getElementById("bt-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


$(document).ready(function () {
  $('.review-cards').slick({
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
    arrows: true,
    dots: false,
    pauseOnHover: false,
    focusOnSelect: true,


    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});




/*
The default country is US and the default site is google.com
The code below is placed on the default site. The other site where you want to send visitors from the rest of the world is google.co.uk
*/
var defaultCountry = "BD";
var defaultSite = "http://127.0.0.1:5500/index.html";
var otherSite = "http://127.0.0.1:5500/index-en.html";
fetch("https://ipapi.co/country/")
 .then(response => {
   if (response.ok) {
     return response.text();
   } else {
     throw new Error ('New error message', { statusCode: 404 });
   }
 })
 .then(country => {
   if (country == defaultCountry) {
     // No action needed - already on the default site
     console.log("Already on default site");
   } else {
     // Redirect rest of the world
     console.log("Redirecting to country specific website");
     window.location = otherSite;
   }
 })
 .catch(function(error) {
   // Network error
   // Script blocked by browser extension
   // 429 error (too many requests)
   console.log(error);
 });