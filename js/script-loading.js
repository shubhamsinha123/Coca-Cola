

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
})
menuTrigger.addEventListener("click", () => {
  toggleMenu();
})
closeMenu.addEventListener("click", () => {
  toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
})
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }

  }
}





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}





// Load More Script


var arr = [...document.getElementsByClassName('gre1')]
console.log(arr)
var x = 0;
var showless;
const showmore = document.getElementById('showmore')
showmore.addEventListener('click', () => {

  if (x < arr.length) {

    showmore.innerHTML = "Show More";

    // if(arr[])
    // arr[x].style.display = "block"
    // arr[++x].style.display = "block"
    // arr[++x].style.display = "block"

    arr[x].classList.add("gre-effect")
    arr[x].classList.remove("gre1")
    arr[++x].classList.add("gre-effect")
    arr[x].classList.remove("gre1")
    arr[++x].classList.add("gre-effect")
    arr[x].classList.remove("gre1")
    ++x;
    if (x == arr.length) {
      showmore.innerHTML = "Show Less";
      x++;
    }
  }
  else if (x > arr.length) {
    x--;

    arr[--x].classList.add("gre1")
    arr[x].classList.remove("gre-effect")
    arr[--x].classList.add("gre1")
    arr[x].classList.remove("gre-effect")
    arr[--x].classList.add("gre1")
    arr[x].classList.remove("gre-effect")

    --x;
    // arr[--x].style.display = "none"
    // arr[--x].style.display = "none"
    // arr[--x].style.display = "none"
    // --x;
    // showless.id = "showmore";


  }

});



// Carousal Scripts

var slideIndex1 = 1;
showCarousal(slideIndex);

function plusCarousal(n) {
  showCarousal(slideIndex += n);
}

function currentCarousal(n) {
  showCarousal(slideIndex = n);
}

function showCarousal(n) {
  var k;
  var car = document.getElementsByClassName("carousal");
  var dash = document.getElementsByClassName("dash");
  if (n > car.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = car.length }
  for (k = 0; k < car.length; k++) {
    car[k].style.display = "none";
  }
  for (k = 0; k < dash.length; k++) {
    dash[k].className = dash[k].className.replace(" active", "");
  }
  car[slideIndex - 1].style.display = "block";
  dash[slideIndex - 1].className += " active";
}
