"use strict";
$(function () {
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
    });
})


//==================top collection start======================//

$(document).ready(function () {
    var $bigItem_1 = $('.top_collection_item-1 .display img'); //save big images
    var $smallItem_1 = $('.top_collection_item-1 .thambnail ul li');//save small images
    
    var $bigItem_2 = $('.top_collection_item-2 .display img'); //save big images
    var $smallItem_2 = $('.top_collection_item-2 .thambnail ul li');//save small images
    
    var $bigItem_3 = $('.top_collection_item-3 .display img'); //save big images
    var $smallItem_3 = $('.top_collection_item-3 .thambnail ul li');//save small images
    
    var $bigItem_4 = $('.top_collection_item-4 .display img'); //save big images
    var $smallItem_4 = $('.top_collection_item-4 .thambnail ul li');//save small images
    
    var $bigItem_5 = $('.top_collection_item-5 .display img'); //save big images
    var $smallItem_5 = $('.top_collection_item-5 .thambnail ul li');//save small images
    //save small images
    //save color circles
    var $color_1 = $('.top_collection_item-1 .colors span');
    var $color_2 = $('.top_collection_item-2 .colors span');
    var $color_3 = $('.top_collection_item-3 .colors span');
    var $color_4 = $('.top_collection_item-4 .colors span');
    var $color_5 = $('.top_collection_item-5 .colors span');


    // ====================  Item 01 start  ========================//
    //click and moseenter function on small image
    //you could delete one eventlistener
      $smallItem_1.on('click mouseenter', function () {
        //remove active class from all items
          $bigItem_1.removeClass('active');
          $smallItem_1.removeClass('active');
          $color_1.removeClass('active');
        //add active class to item as small item's index
          $bigItem_1.eq($(this).index()).addClass('active');
          $smallItem_1.eq($(this).index()).addClass('active');
          $color_1.eq($(this).index()).addClass('active');
          console.log($color_1.eq($(this).index()));
      });

      $color_1.on('click', function () {
        //remove active class from all items
          $bigItem_1.removeClass('active');
          $smallItem_1.removeClass('active');
          $color_1.removeClass('active');
        //add active class to item as small item's index
          $bigItem_1.eq($(this).index()).addClass('active');
          $smallItem_1.eq($(this).index()).addClass('active');
          $color_1.eq($(this).index()).addClass('active');
      });
      // ====================  Item 01 end  ========================//
  
    // ====================  Item 02 start  ========================//
    //you could delete one eventlistener
      $smallItem_2.on('click mouseenter', function () {
        //remove active class from all items
          $bigItem_2.removeClass('active');
          $smallItem_2.removeClass('active');
        //add active class to item as small item's index
          $bigItem_2.eq($(this).index()).addClass('active');
          $smallItem_2.eq($(this).index()).addClass('active');
      });

      $color_2.on('click', function () {
        //remove active class from all items
          $bigItem_2.removeClass('active');
          $smallItem_2.removeClass('active');
        //add active class to item as small item's index
          $bigItem_2.eq($(this).index()).addClass('active');
          $smallItem_2.eq($(this).index()).addClass('active');
      });
      // ====================  Item 02 end  ========================//
  
    // ====================  Item 03 start  ========================//
    //you could delete one eventlistener
      $smallItem_3.on('click mouseenter', function () {
        //remove active class from all items
          $bigItem_3.removeClass('active');
          $smallItem_3.removeClass('active');
        //add active class to item as small item's index
          $bigItem_3.eq($(this).index()).addClass('active');
          $smallItem_3.eq($(this).index()).addClass('active');
      });

      $color_3.on('click', function () {
        //remove active class from all items
          $bigItem_3.removeClass('active');
          $smallItem_3.removeClass('active');
        //add active class to item as small item's index
          $bigItem_3.eq($(this).index()).addClass('active');
          $smallItem_3.eq($(this).index()).addClass('active');
      });
      // ====================  Item 03 end  ========================//
  
    // ====================  Item 04 start  ========================//
    //you could delete one eventlistener
      $smallItem_4.on('click mouseenter', function () {
        //remove active class from all items
          $bigItem_4.removeClass('active');
          $smallItem_4.removeClass('active');
        //add active class to item as small item's index
          $bigItem_4.eq($(this).index()).addClass('active');
          $smallItem_4.eq($(this).index()).addClass('active');
      });

      $color_4.on('click', function () {
        //remove active class from all items
          $bigItem_4.removeClass('active');
          $smallItem_4.removeClass('active');
        //add active class to item as small item's index
          $bigItem_4.eq($(this).index()).addClass('active');
          $smallItem_4.eq($(this).index()).addClass('active');
      });
      // ====================  Item 04 end  ========================//
  
    // ====================  Item 05 start  ========================//
    //you could delete one eventlistener
      $smallItem_5.on('click mouseenter', function () {
        //remove active class from all items
          $bigItem_5.removeClass('active');
          $smallItem_5.removeClass('active');
        //add active class to item as small item's index
          $bigItem_5.eq($(this).index()).addClass('active');
          $smallItem_5.eq($(this).index()).addClass('active');
      });

      $color_5.on('click', function () {
        //remove active class from all items
          $bigItem_5.removeClass('active');
          $smallItem_5.removeClass('active');
        //add active class to item as small item's index
          $bigItem_5.eq($(this).index()).addClass('active');
          $smallItem_5.eq($(this).index()).addClass('active');
      });
      // ====================  Item 05 end  ========================//
    
   });
   //==================top collection end======================//


   // // Pure Javascript
//    let thumbnail = document.querySelectorAll(".thumbnail button");
//  let display = document.querySelectorAll(".display .img");
//  const displayArray = Array.from(display);


//  thumbnail.forEach((item, index)=> {
//     let number = index
//     item.addEventListener("mouseenter", ()=> {
//         let parentDiv = displayArray[index].parentElement;
//         let childDivs = parentDiv.querySelectorAll(".img");
//         let childDivArray = Array.from(childDivs);
//         childDivArray.map((img) => {
//             img.classList.remove("active");
//             displayArray[index].classList.add("active")
//         })
//     })
//  })