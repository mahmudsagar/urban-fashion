// active class for active menus
const currentLocation = location.href;

const activeMenu = (length, links) => {
  for (let i = 0; i < length; i++) {
    if (links[i].href === currentLocation) {
      links[i].classList.add("active");
    }
  }
};
const addActive = () => {
  const navLinks = document.querySelectorAll(".menu li a");
  const sidebarNavLinks = document.querySelectorAll(".sidebar-menu li a");
  const navLength = navLinks.length;
  const sidebarNavLength = sidebarNavLinks.length;
  activeMenu(navLength, navLinks);
  activeMenu(sidebarNavLength, sidebarNavLinks);
};

//submenu
const submenu = document.querySelector(".submenu");
const shopBtn = document.querySelector(".menu .shop-btn");
const link = shopBtn.querySelector("a");

//submenu function for mobile
const sidebarShopBtn = document.querySelector(".sidebar-menu .shop-btn");
const sidebarLink = sidebarShopBtn.querySelector("a");

const showSubMenu = (triggeBtn, targetlink) => {
  triggeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    submenu.classList.toggle("show-submenu");
    targetlink.classList.toggle("active");
  });
};
//hamburger icon functions

const hamburgerBtn = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-submenu");
  submenu.classList.toggle("show-submenu");
});

// firs slider
const slider = document.querySelector(".product-container");
const sliderList = document.querySelector(".slider-container");
// second slider
const slider1 = document.querySelector(".product-container-2");
const sliderList1 = document.querySelector(".slider-container-2");

// product slider
const ProductSlider = (slider, sliderList, interval) => {
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");
  let sliderWidth = slider.offsetWidth / 3;
  let items = sliderList.querySelectorAll(".card").length - 2;
  let count = 1;
  let screenSize = window.screen.width;
  window.addEventListener("resize", function () {
    screenSize = window.screen.width;
  });

  if (screenSize <= 768) {
    sliderWidth = slider.offsetWidth / 2;
    items = sliderList.querySelectorAll(".card").length;
  }

  if (screenSize <= 500) {
    sliderWidth = slider.querySelector(".slider-container .card").offsetWidth+30;
    items = sliderList.querySelectorAll(".card").length;
  }

  const prevSlide = () => {
    if (count > 1) {
      count = count - 2;
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
      prev.style.display = "block";
    } else if (count === 1) {
      count = items - 1;
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  const nextSlide = () => {
    if (count < items) {
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
      prev.style.display = "block";

    } else if (count === items) {
      sliderList.style.left = "0px";
      count = 1;
      prev.style.display = "none";
    }
  };

  prev.addEventListener("click", prevSlide);
  next.addEventListener("click", nextSlide);
  setInterval(() => {
    nextSlide();
  }, interval);
};

//testimonial slider
const testimonialSlider = () => {
  const slider = document.querySelector(".testimonial-container");
  const slides = document.querySelectorAll(".testimonial-card-container");
  const prev = slider.querySelector(".testimonial-prev");
  const next = slider.querySelector(".testimonial-next");
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  let counter = 0;
  const carousel = () => {
    if (counter < slides.length - 1) {
      next.style.display = "block";
    } else {
      next.style.display = "none";
    }
    if (counter > 0) {
      prev.style.display = "block";
    } else {
      prev.style.display = "none";
    }
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  prev.addEventListener("click", () => {
    counter--;
    carousel();
  });
  next.addEventListener("click", () => {
    counter++;
    carousel();
  });
};

window.onload = () => {
  ProductSlider(slider, sliderList, 4000);
  // ProductSlider(slider1, sliderList1, 4500);
  showSubMenu(shopBtn, link);
  showSubMenu(sidebarShopBtn, sidebarLink);
  testimonialSlider();
  addActive();
  submenu.classList.remove("show-submenu");
  link.classList.remove("active");
};
