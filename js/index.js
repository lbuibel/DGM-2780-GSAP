// Custom JS here

// OPENING HAMBURGER MENU
const navOpen = () => {
    const body = document.querySelector('body')
    const burger = document.querySelector('#burger')
    const nav = document.querySelector('.nav-window')
    const navLinks = document.querySelectorAll('.nav-links li')
    // CLICKING ON THE MENU BTN
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active')
        // FADE IN LINKS - INDEX IS USED TO DELAY EACH LINK fade in links
        navLinks.forEach((link, index) => {
            link.style.animation = `nav-link-fade .75s ease ${index / 7}s`
        })
        body.setAttribute("style", "overflow-y: hidden")
    })
}

// CLOSING MENU
const navClose = () => {
    const close = document.querySelector('#close')
    const nav = document.querySelector('.nav-window')
    const navLinks = document.querySelectorAll('.nav-links li')
    close.addEventListener('click', () => {
        nav.classList.remove('nav-active')
        navLinks.forEach((link, index) => {
            // REMOVING ANIMATION FROM LINKS AFTER USER CLOSES MENU
            link.style.animation = `nav-link-fade-out .75s ease ${index / 7}s`
        })
    document.querySelector('body').setAttribute("style", "overflow-y: visible")
    })
}

const calcNavHeight = () => {
    const height = document.querySelector('nav').clientHeight
    document.querySelector('.close-container').setAttribute("style", `height:${height}px`)
}

navOpen()
navClose()
calcNavHeight()


//------------------ SCROLL MAGIC -----------------//
const controller = new ScrollMagic.Controller();

var headingFade = TweenMax.from(".fade-in", 1, {y: 25, opacity: 0});
var cardFade = TweenMax.from(".card-fade-in", 1, {y: 25, opacity: 0});


var scene = new ScrollMagic.Scene({
    triggerElement: '.hero-info',  
})
.setTween(headingFade)
.addIndicators({name: "trigger"}) 
.addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: '.trigger2',  
})
.setTween(cardFade)
.addIndicators() 
.addTo(controller);