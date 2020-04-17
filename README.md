# Introduction to GSAP

Animations can be found in [index.js](https://github.com/lbuibel/DGM-2780-GSAP/blob/master/js/index.js)<br><br>

### First Animation (page/window load event)



```
window.addEventListener('load', ()=> {
    gsap.from('.logo', {duration: 3, opacity: 0})
})
```
<sup>Fades logo in on page load</sup>
<br><br>

### Second Animation(s) (click event)

```
const burger = document.querySelector('#burger')
.addEventListener('click', () => {
    gsap.to('#burger', {duration: 1, rotation: -90, opacity: 0, x: -50})
    gsap.from('#close', {duration: 1.5, x: -100, rotation: -100})
})

const close = document.querySelector('#close')
.addEventListener('click', () => {
    gsap.to('#burger', {duration: 1, rotation: 0, opacity: 1, x: 0})
})
```
<sup>Fades menu icons in and out while roating them after user clicks on them</sup>
<br><br>

### Additional Animations Using Scroll Magic

Can also be found in [index.js](https://github.com/lbuibel/DGM-2780-GSAP/blob/master/js/index.js)

Items are faded in and moved upwards based on scroll postion.<br>
<br>
Items animated by scrollmagic:
- Featured services heading on home page
- Facials Card & Skin care card on home page
- Small card section on home page
- Large image conatiner on about page