"use strict";

$(function () {
  // sticky nav and to top start
  let naving = document.getElementById('navbar');
  let toping = document.querySelector('.toping');
  window.addEventListener('scroll', function(){
    let scroll_value = window.scrollY;
    if (scroll_value > 160) {
        naving.classList.add('sticky');
        toping.classList.add('top');
      } else {
        naving.classList.remove('sticky');
        toping.classList.remove('top');
      };
    });
  // sticky nav and to top end

    // Theme Feature Start
    let dark_light = document.querySelector(".dark_light");
    let body = document.querySelector("body");
    let section_heading = document.querySelector(".section_heading")
    dark_light.addEventListener("click", function(){
      // alert("ok");
      body.classList.toggle("dark");
      dark_light.classList.toggle("dark");
      section_heading.classList.toggle("dark");
    })
    // Theme Feature End
    // banner slick slider js Start================
    $('.banner_slider').slick({
        arrows: true,
        autoplay: false,
        dots: false,
        prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
    });
    // blog slick slider js Start================
    $('.blog_items').slick({
        arrows: false,
        autoplay: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true
    });
    // Product Slider start
    $('.product_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      draggable: true,
      infinite: false,
    });
    //Product Slider end
    // brand Slider start
    $('.brand_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 4,
      arrows: false,
      draggable: true,
      // centerMode: true,
      // centerPadding: '60px',
    });
    //brand Slider end
    // Product left Slider start
    $('.new_product_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
      nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
    });
    // counter
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
    //Product left Slider end
  //   window.addEventListener ("scroll", function () {
  //     let scroll_value = Math.floor(window.scrollY);
  //     console.log(scroll_value);
  //     // console.log(Math.floor(scroll_value));
  //     if (scroll_value > 100) {
  //         navbar.classList.add("sticky");
  //         back_to_top.classList.add("show");
  //     } else {
  //         navbar.classList.remove("sticky");
  //         back_to_top.classList.remove("show");
  //     }
  // })


})

// All Reference start
const thumbnailArray = Array.from(document.querySelectorAll(".thambnail ul li"));
const displayArray = Array.from(document.querySelectorAll(".display img"));
const colorsArray = Array.from(document.querySelectorAll(".colors span"));
// All Reference end


thumbnailArray.map((item, index)=> {
   item.addEventListener("mouseenter", ()=> {

    // catch all thumbnail image
    let allListArr = Array.from(item.parentElement.querySelectorAll("li"));
    allListArr.map((thumbnail)=> {
      thumbnail.classList.remove("active");
    });
    
    // catch all Circle color
    let colors = Array.from(item.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".text_box .colors span"));
    colors.map((item) => {
      item.classList.remove("active")
    })
    

    // Catch all Display images
    let parentDiv = displayArray[index].parentElement;
    let displayImages = parentDiv.querySelectorAll("img");
    let displayImgArr = Array.from(displayImages);
    displayImgArr.map((img) => {
        img.classList.remove("active");
        
    })

    // Active class add
    thumbnailArray[index].classList.add("active")
    displayArray[index].classList.add("active")
    colorsArray[index].classList.add("active")


   })
})

// Colors circle eventListener
colorsArray.map((color, index) => {
  color.addEventListener("click", () => {
    // catch all display image
    let displayImages = color.parentElement.parentElement.parentElement;
    let img =  Array.from(displayImages.querySelectorAll(".image_box .display img"))
    img.map(item => {
      item.classList.remove("active")
    })
    // catch all thumbnail image
    let thumbnailImages = color.parentElement.parentElement.parentElement;
    let thumb =  Array.from(thumbnailImages.querySelectorAll(".image_box .thambnail li"))
    console.log( thumbnailImages);
    thumb.map(item => {
      item.classList.remove("active")
    })

    // catch all circle color
    let parentCircle = color.parentElement;
    let allColorCircle = parentCircle.querySelectorAll("span");
    let allColorCircleArr = Array.from(allColorCircle);
    allColorCircleArr.map((item) => {
      item.classList.remove("active")
    })

    // Active class add
    thumbnailArray[index].classList.add("active")
    displayArray[index].classList.add("active")
    colorsArray[index].classList.add("active")
  })
})

