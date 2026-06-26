// ===============================
// NOORA Website Script
// ===============================

// Smooth scrolling for navigation


document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});


// Navigation shadow while scrolling

window.addEventListener('scroll', ()=>{

    const nav=document.querySelector('nav');

    if(window.scrollY>40){

        nav.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

    }

    else{

        nav.style.boxShadow="0 2px 12px rgba(0,0,0,.06)";

    }

});


// Fade in sections

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition=".8s";

observer.observe(section);

});


// Back To Top Button

const topButton=document.createElement("button");

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="30px";
topButton.style.right="30px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#B4947A";
topButton.style.color="white";
topButton.style.fontSize="20px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

console.log("NOORA website loaded 🤍");
