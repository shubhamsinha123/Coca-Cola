var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// contact popup starts
function openForm() {
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
// contact popup ends

// var mybutton = document.getElementById("myBtn");
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }
// function topFunction() {
//     window.scrollTo(0, 0);
// }

// function myFunction() {
//     var x = document.getElementById("myNavigation");
//     if (x.className === "navigation") {
//         x.className += " responsive";
//     } else {
//         x.className = "navigation";
//     }
// }

// scroll to top functions

