/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction () {
const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== HOME BACKGROUND PARALLEX ================*/
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    // .to('.rock',3, {y:-500})
    // .to('.girl', 3, {y:-400}, "-=3")
    .fromTo('.bg', 3, {y:-50},{y:50, duration: 3}, "-=3")
    .to('.about__section', 3, {top:'0%'}, "=-3")


let scene = new ScrollMagic.Scene({
    triggerElement:"about__section",
    duration: "100%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("about__section")
    .addTo(controller);

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        if(tab.dataset.target == '#all'){
            tabContents.forEach(tabContent =>{
                tabContent.classList.add('qualification__active')
                tabContent.classList.remove('qualification__inactive')
            }) 
            tabs.forEach(tab =>{
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        } else {
            tabContents.forEach(tabContent =>{
                if (target ==  tabContent){
                    target.classList.remove('qualification__inactive')
                    target.classList.add('qualification__active')
                } else if (tabContent.classList.contains('qualification__active')) {
                    tabContent.classList.remove('qualification__active')
                    tabContent.classList.add('qualification__inactive')
                }
            })
            
            tabs.forEach(tab =>{
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        }
    })
    
})

/*==================== PROJECTS TABS ====================*/
/*const projTabs = document.querySelectorAll('[data-projTarget]'),
    projTabContents = document.querySelectorAll('[data-projContent]')


projTabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        projTabContents.forEach(tabContent =>{
            tabContent.classList.remove('projects__active')
        })
        target.classList.add('projects__active')

        projTabs.forEach(tab =>{
            tab.classList.remove('projects__active')
        })
        tab.classList.add('projects__active')
    })
})*/


/*==================== PROJECTS MODAL ====================*/
const modalViews = document.querySelectorAll('.photos__modal'),
    modalBtns = document.querySelectorAll('.photos__button'),
    modalCloses = document.querySelectorAll('.photos__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
    swiper.autoplay.stop();
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
            swiper.autoplay.start();
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/
// let swiper = new Swiper('.portfolio__container', {
//     cssMode: true,
//     loop: true,

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });

let swiperPortfolio = new Swiper(".portfolio__container", {
    slidesPerView: 1,
    spaceBetween: 48,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

/*==================== PHOTO SWIPER  ====================*/
var swiper = new Swiper(".myPhotoSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets : true,
    },

    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            if(sectionId != 'hobbies')
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            if(sectionId != 'hobbies')
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
        
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
