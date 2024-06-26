document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const navContent = document.getElementById("nav-content");
    const navLinks = document.querySelectorAll("#nav-content h4 a");

    menuButton.addEventListener("click", function() {
        navContent.classList.add("active");
        menuButton.classList.remove("active");
        closeButton.classList.add("active");
    });

    closeButton.addEventListener("click", function() {
        navContent.classList.remove("active");
        menuButton.classList.add("active");
        closeButton.classList.remove("active");
    });

    // Close the menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navContent.classList.remove("active");
            menuButton.classList.add("active");
            closeButton.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle clicking on project elements
    function showCard(cardId) {
        var card = document.getElementById(cardId);
        card.style.display = "block";
    }

    // Function to handle closing the card
    function closeCard(cardId) {
        var card = document.getElementById(cardId);
        card.style.display = "none";
    }

    // Get all elements with class "elem" (project elements)
    var elems = document.querySelectorAll(".elem");

    // Loop through each project element
    elems.forEach(function(elem, index) {
        var cardId = "card" + (index + 1); // Construct the corresponding card ID
        elem.addEventListener("click", function() {
            showCard(cardId); // Show the corresponding card when clicked
        });
    });

    // Get all elements with class "close-btn" (close buttons in cards)
    var closeBtns = document.querySelectorAll(".close-btn");

    // Loop through each close button
    closeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var cardId = this.parentElement.parentElement.id; // Get the ID of the parent card
            closeCard(cardId); // Close the corresponding card
        });
    });

    // Smooth scroll for navigation links
    var navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    var imagePaths = [
        "assets/portfolio-MU.png",
        "assets/ai-MU.png",
        "assets/gpt-MU.png",
        "assets/clone-MU.png",
    ];

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
        fixed.style.backgroundImage = `url(assets/portfolio-MU.png)`;
    });

    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e, index) {
        e.addEventListener("mouseenter", function () {
        fixed.style.backgroundImage = `url(${imagePaths[index]})`;
    });
    });
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

}

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";
        loader.style.opacity = "0";
    }, 4200);
}

window.onload = loaderAnimation;


swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()



