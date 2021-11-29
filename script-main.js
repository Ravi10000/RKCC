// const telephone = document.querySelector("#telephone-icon");
// const whatsapp = document.querySelector("#whatsapp-icon");

// TODO:

// FIXME:

const icons = document.querySelectorAll(".icon");
const contactInfo = document.querySelector('.contact-info');

function mouseLeave(iconsList){
    iconsList.forEach(icon => {
        icon.addEventListener('mouseleave', ()=>{
            icon.style.transition = "transform ease-out .25s";
        })
    });
}
mouseLeave(icons);
// We Provide Complete Air Conditioner and Refrigrator Solutions
const subtitle = document.querySelector('#subtitle');
const text = "We Provide Complete Air Conditioner and Refrigrator Solutions.";


// let i = 0;
// // var txt = 'Lorem ipsum dummy text blabla.';
// let speed = 50;
// function typeWriter() {
//     if (i < text.length) {
//       document.getElementById("subtitle").innerHTML += text.charAt(i);
//       i++;
//       setTimeout(typeWriter, speed);
//     }
//   }

//   window.addEventListener('load', typeWriter)



