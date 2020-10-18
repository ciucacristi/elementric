/*
Elementric - Web UI Components
Author: © Ciuca Cristian
Author URL: https://www.ciucacristi.tk/
Version: 1.0 Beta
Demo: https://www.ciucacristi.github.io/elementric
License: MIT License
*/

/* Navbar Shrink Scroll Effect */
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

function copyToClipboard(element) {
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(document).ready(function(){
  $('.clipboard-btn').tooltip({title: "Copied", trigger: "click"});
});

function openNav() {
  document.querySelector(".sidebar").style.display = "block";
  document.querySelector(".open-sidebar").style.display = "none";
  document.querySelector(".close-sidebar").style.display = "block";
}

function closeNav() {
  document.querySelector(".sidebar").style.display = "none";
  document.querySelector(".close-sidebar").style.display = "none";
  document.querySelector(".open-sidebar").style.display = "block";
}

// Cache selectors
var lastId,
    topMenu = $("#right-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});
