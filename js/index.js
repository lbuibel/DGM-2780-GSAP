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

var headingFade = TweenMax.from(".fade-in", .75, {y: 25, opacity: .25});
var cardFade = TweenMax.from(".facial-card", .75, {y: 25, opacity: 0});
var cardFade2 = TweenMax.from(".skin-care-card", .75, {y: 15, opacity: 0})
var galleryFade = TweenMax.from("#gallery-fade", 1.75, {y: 25, opacity: 0})
var smallCardFade = TweenMax.from(".small-card-container", .75, {y:25, opacity: .25})

var scene = new ScrollMagic.Scene({
    triggerElement: '.hero-info',  
})
.setTween(headingFade)
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '.trigger2',  
})
.setTween(cardFade)
.addTo(controller);

var scen3 = new ScrollMagic.Scene({
    triggerElement: '#gallery-trigger',  
})
.setTween(galleryFade)
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement: "#facial-trigger"
})
.setTween(cardFade2)
.addTo(controller);

var scene5 = new ScrollMagic.Scene({
    triggerElement: ".skin-care-card"
})
.setTween(smallCardFade)
.addTo(controller);

var scene6 = new ScrollMagic.Scene({
    triggerElement: '#gallery-trigger',  
})
.setTween(galleryFade)
.addTo(controller);

//------------------ GSAP ANIMATIONS -----------------//
window.addEventListener('load', ()=> {
    gsap.from('.logo', {duration: 2.25, opacity: 0})
})

const burger = document.querySelector('#burger')
.addEventListener('click', () => {
    gsap.to('#burger', {duration: 1, rotation: -90, opacity: 0, x: -50})
    gsap.from('#close', {duration: 1.5, x: -100, rotation: -100})
})

const close = document.querySelector('#close')
.addEventListener('click', () => {
    gsap.to('#burger', {duration: 1, rotation: 0, opacity: 1, x: 0})
})