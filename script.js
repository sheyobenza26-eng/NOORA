/* =====================================
   NOORA Luxury Website
   Version 1.0
======================================*/

document.addEventListener("DOMContentLoaded", function () {

    /* Fade In Sections */

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

});


/* Navigation Scroll Effect */

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.padding = "12px 8%";
        nav.style.background = "rgba(255,255,255,.97)";
        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    } else {

        nav.style.padding = "18px 8%";
        nav.style.background = "rgba(255,255,255,.90)";
        nav.style.boxShadow = "0 3px 15px rgba(0,0,0,.06)";

    }

});


/* Back To Top Button */

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topButton";

document.body.appendChild(button);

button.style.position = "fixed";
button.style.right = "25px";
button.style.bottom = "25px";
button.style.width = "50px";
button.style.height = "50px";
button.style.borderRadius = "50%";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.background = "#B4947A";
button.style.color = "white";
button.style.fontSize = "20px";
button.style.display = "none";
button.style.boxShadow = "0 8px 20px rgba(0,0,0,.20)";
button.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});

button.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* Button Hover Animation */

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.transform="translateY(-2px)";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.transform="translateY(0px)";

    });

});


console.log("NOORA Website Loaded 🤍");
