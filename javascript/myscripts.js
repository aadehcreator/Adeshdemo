function showStuff() {
  //alert('shilpu');
  var x = document.getElementById("mobile-menu-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hidestuff() {
  //alert('shilpu');
  var x = document.getElementById("mobile-menu-bar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function offerbox() {
  // alert("show your details");

  document.getElementById("col-offersec").style.display = "block";
}

function closebx() {
  // alert("closebox");

  document.getElementById("col-offersec").style.display = "none";
}



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;

  let slides = document.getElementsByClassName("mySlides");

    let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;

  
  let slides = document.getElementsByClassName("navslider");
    let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {
    slideIndex1 = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}



$('.responsive').slick({
  dots: true,
  autoplay:true,
  loop:true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});