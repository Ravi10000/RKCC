// const telephone = document.querySelector("#telephone-icon");
// const whatsapp = document.querySelector("#whatsapp-icon");

// TODO:

// FIXME:

const icons = document.querySelectorAll(".icon")
const contactInfo = document.querySelector('.contact-info')
const popUp = document.querySelector('.pop-up')
// const linkContainer = document.querySelectorAll('.pop-up div')
const link = document.querySelectorAll('.pop-up a');
const contacts = document.querySelectorAll('.popUp div')
const contactInfoContainer = document.querySelector('.contact-info')

// console.log(linkContainer)

function mouseLeave(iconsList){
    iconsList.forEach(icon => {
        icon.addEventListener('mouseleave', ()=>{
            icon.style.transition = "transform ease-out .25s"
        })
    });
}
mouseLeave(icons)



icons[0].addEventListener('click', e=>{
        contactInfoContainer.classList.add('move')
        e.target.classList.add('animate')
        icons[1].classList.remove('animate')
        popUp.classList.add('show')
        popUp.classList.remove('wa')
        link[0].setAttribute('href', 'tel:+917678627063')
        link[1].setAttribute('href', 'tel:+919582541150')
})
icons[1].addEventListener('click', e=>{
        contactInfoContainer.classList.add('move')
        e.target.classList.add('animate')
        icons[0].classList.remove('animate')
        popUp.classList.add('show', 'wa')
        link[0].setAttribute('href', 'https://wa.me/+917678627063')
        link[1].setAttribute('href', 'https://wa.me/+919582541150')
})

// linkContainer[0].addEventListener('click', e=>{
//     // e.classList.add('animate')
//     console.log(e);
    
// })
// var ignoreClickOnMeElement = document.getElementById('someElementID');

document.addEventListener('click', function(event) {
    let isClickInsideElement = icons[0].contains(event.target)
    let isClickInsideElement2 = icons[1].contains(event.target)
    if (!isClickInsideElement && !isClickInsideElement2) {
        console.log(event.target)
    contactInfoContainer.classList.remove('move')
        popUp.classList.remove('show')
        icons[0].classList.remove('animate')
        icons[1].classList.remove('animate')

        // event.target.classList.remove('animate')
        
        //Do something click is outside specified element
    }
});

// function animateOnClick(element){
//     element.style.
// }
// @keyframes animate-click{
//     0%{     transform: scale(1);   }
//     60%{    transform: scale(.8);  }
//     80%{    transform: scale(0.95);   }
//     100%{   transform: scale(1);  }
// }