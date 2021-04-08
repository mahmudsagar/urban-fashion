// active class for active menus
const addActive = ()=>{
    const navLinks = document.querySelectorAll('.menu li a')
    const sidebarNavLinks = document.querySelectorAll('.sidebar-menu li a')
    const currentLocation = location.href
    const navLength = navLinks.length
    const sidebarNavLength = sidebarNavLinks.length
    for (let i = 0; i<navLength;i++){
        if(navLinks[i].href ===currentLocation){
            navLinks[i].classList.add('active')
        }
    }
    for (let i = 0; i<sidebarNavLength;i++){
        if(sidebarNavLength[i].href ===currentLocation){
            sidebarNavLength[i].classList.add('active')
        }
    }
}
//submenu function
const submenu = document.querySelector('.submenu')
const shopBtn = document.querySelector('.shop-btn')
const link = shopBtn.querySelector('a')
shopBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    submenu.classList.toggle('show-submenu')
    link.classList.toggle('active')
})

//submenu function for mobile
const sidebarShopBtn = document.querySelector('.sidebar-menu .shop-btn')
const sidebarLink = sidebarShopBtn.querySelector('a')
sidebarShopBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    submenu.classList.toggle('show-submenu')
    sidebarLink.classList.toggle('active')
})

//hamburger icon functions

const hamburgerBtn = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')

hamburgerBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('show-submenu')
    submenu.classList.toggle('show-submenu')
})


// product slider
const firstProductSlider = () => {
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    const slider = document.querySelector('.product-container')
    let sliderWidth = slider.offsetWidth / 3
    const sliderList = document.querySelector('.slider-container')
    let items = sliderList.querySelectorAll('.card').length - 2
    let count = 1
    const prevSlide =()=> {
        if (count > 1) {
            count = count - 2;
            sliderList.style.left = '-' + count * sliderWidth + 'px';
            count++;
        } else if (count === 1) {
            count = items - 1;
            sliderList.style.left = '-' + count * sliderWidth + 'px';
            count++;
            prev.style.display = 'none'
        }
    }


    const nextSlide=()=> {
        if (count < items) {
            sliderList.style.left = '-' + count * sliderWidth + 'px';
            count++;
            prev.style.display = 'block'
        } else if (count === items) {
            sliderList.style.left = '0px';
            count = 1;
            prev.style.display = 'none'
        }
    }

    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
    setInterval( ()=> {
        nextSlide();
    }, 4000);
}
//product slider
const secondProductSlider = () => {
    const slider = document.querySelector('.product-container-2')
    const prev = slider.querySelector('.prev')
    const next = slider.querySelector('.next')
    let sliderWidth = slider.offsetWidth / 3
    const sliderList = document.querySelector('.slider-container-2')
    let item = sliderList.querySelectorAll('.card').length - 2
    let count = 1
    const prevSlide =()=> {
        if (count > 1) {
            count = count - 2;
            sliderList.style.left = '-' + count * sliderWidth + 'px';
            count++;
        } else if (count === 1) {
            count = item - 1;
            sliderList.style.left = '-' + count * sliderWidth + 'px';
            count++;
            prev.style.display = 'none'
        }
    }


    const nextSlide=()=> {
        if (count < item) {
            sliderList.style.left = '-' + count * sliderWidth + 'px';
            count++;
            prev.style.display = 'block'
        } else if (count === item) {
            sliderList.style.left = '0px';
            count = 1;
            prev.style.display = 'none'
        }
    }

    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
    setInterval( ()=> {
        nextSlide();
    }, 3000);
}
//testimonial slider
const testimonialSlider = () => {
    const slider = document.querySelector('.testimonial-container')
    const slides = document.querySelectorAll('.testimonial-card-container')
    const prev = slider.querySelector('.testimonial-prev')
    const next = slider.querySelector('.testimonial-next')
    slides.forEach((slide, index)=>{
        slide.style.left = `${index*100}%`
    })
    let counter = 0
    const carousel = ()=>{
        if (counter< slides.length - 1){
            next.style.display = "block"
        }else {
            next.style.display = "none"
        }
        if (counter>0){
            prev.style.display = "block"
        }else {
            prev.style.display = "none"
        }
        slides.forEach((slide)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`;
        })
    }

    prev.addEventListener('click', ()=>{
        counter--;
        carousel()
    });
    next.addEventListener('click', ()=>{
        counter++;
        carousel()
    });
}


window.onload = ()=> {
    firstProductSlider()
    secondProductSlider()
    testimonialSlider()
    addActive()
    submenu.classList.remove('show-submenu')
    link.classList.remove('active')
}