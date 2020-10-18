/*
Elementric - Web UI Components
Author: © Ciuca Cristian
Author URL: https://www.ciucacristi.tk/
Version: 0.1 Beta
Demo: https://www.ciucacristi.github.io/elementric
License: MIT License
*/

/* Closing Alert */
var close = document.getElementsByClassName("closeButton");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

/* Dropdown Button */

function dropdownBtn(element) {
  var dropdowns = document.getElementsByClassName("dropdown-content");

  var thisDropdown = element.nextSibling.nextSibling;

  if (!thisDropdown.classList.contains('show')) {
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }

  thisDropdown.classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('#dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function collapseNavbar() {
  document.querySelector(".navbar-navigation").style.display = "block";
  var element = document.querySelector(".navbar-navigation");
  element.classList.add("collapsed-navigation");
  document.getElementById("open-collapse").style.display = "none";
  document.getElementById("close-collapse").style.display = "block";
}

function closeNavbar() {
  document.querySelector(".navbar-navigation").style.display = "none";
  document.getElementById("close-collapse").style.display = "none";
  document.getElementById("open-collapse").style.display = "block";
}

function openSidebar() {
  document.querySelector(".standard-sidebar").style.display = "block";
  document.querySelector(".sidebar-open").style.opacity = "0";
  document.querySelector(".sidebar-close").style.display = "block";
}

function closeSidebar() {
  document.querySelector(".standard-sidebar").style.display = "none";
  document.querySelector(".sidebar-open").style.opacity = "100";
  document.querySelector(".sidebar-close").style.display = "none";
}

/**/
