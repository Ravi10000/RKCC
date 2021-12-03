// const telephone = document.querySelector("#telephone-icon");
// const whatsapp = document.querySelector("#whatsapp-icon");

// TODO:

// FIXME:

const icons = document.querySelectorAll(".icon")
const contactInfo = document.querySelector('.contact-info')
const popUp = document.querySelector('.pop-up')
const contactHeading = document.querySelector('.pop-up h3')
// const linkContainer = document.querySelectorAll('.pop-up div')
const link = document.querySelectorAll('.pop-up a');
const contact = document.querySelectorAll('.pop-up div')
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
console.log(contact);
// link[0].addEventListener('click', ()=>{
//     contact[0].classList.add('click')
//     console.log(e);
// })

icons[0].addEventListener('click', e=>{
        contactHeading.innerHTML = 'Call'
        contactInfoContainer.classList.add('move')
        e.target.classList.add('animate')
        icons[1].classList.remove('animate')
        popUp.classList.add('show')
        popUp.classList.remove('wa')
        link[0].setAttribute('href', 'tel:+917678627063')
        link[1].setAttribute('href', 'tel:+919582541150')
})
icons[1].addEventListener('click', e=>{
        contactHeading.innerHTML = 'Whats App'
        contactInfoContainer.classList.add('move')
        e.target.classList.add('animate')
        icons[0].classList.remove('animate')
        popUp.classList.add('show', 'wa')
        link[0].setAttribute('href', 'https://wa.me/+917678627063')
        link[1].setAttribute('href', 'https://wa.me/+919582541150')
})


document.addEventListener('click', function(event) {
    const check = e => e === true;
    const arrayOfItems = [icons[0].contains(event.target), icons[1].contains(event.target)]
    // , link[0].contains(event.target), link[1].contains(event.target)

    // let isClickInsideElement = icons[0].contains(event.target)
    // let isClickInsideElement2 = icons[1].contains(event.target)
    if (!arrayOfItems.some(check)) {
        console.log(event.target)
        contactInfoContainer.classList.remove('move')
        popUp.classList.remove('show')
        icons[0].classList.remove('animate')
        icons[1].classList.remove('animate')
    }
});

