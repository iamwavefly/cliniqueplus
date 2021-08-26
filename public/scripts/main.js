// DOM
const btnContent = document.querySelector("#btn__content"),
logoContent = document.querySelector("#logo__content"), 
primaryBtn = document.querySelector("#primary_btn"), 
brandLogo = document.querySelector("#brand_logo"), 
leftToggle = document.querySelector("#left_toggle"),
    cola = document.querySelector("#cola"),
    navLink = document.querySelectorAll("#nav_link"),
    navbar = document.querySelectorAll("#navbar"), 
    navbarList = document.querySelectorAll("#nav_list"), 
    dropNav = document.querySelectorAll("#drop__nav"), 
    dropArr = document.querySelectorAll("#drop__arr"), 
    menuToggler = document.querySelectorAll('.menu_toggler'),
    menuContent = document.querySelectorAll('.menu_content')
    hamburger = document.querySelector("#hamburger"), 
    modalToggle = document.querySelector(".modal_toggle"), 
    modalContainer = document.querySelector(".modal_container"), 
    modalBox = document.querySelector(".modal_box"), 
    modalCnl = document.querySelector(".modal_cnl"),
    fullMode = document.querySelector("#full-screen"),
    wrapLoader = document.querySelector('.wrap-loader')
    // Functions

window.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
        wrapLoader.classList.add("wrap-loader-hidden")   
    }, 2000);
})

//----- dropdown top menu
function showMenu(){
    const attr = this.getAttribute("data-trigger")
    const content = document.getElementById(attr)
    
    menuContent.forEach(menu => {
        if(menu.id !== attr){
            menu.classList.remove("show_menu_content")
        }
    });
    content.classList.toggle("show_menu_content")

    var bounding = content.getBoundingClientRect();
    if (bounding.right > (window.innerWidth || document.documentElement.clientWidth)) {
        content.classList.add("offset")
    }

}
menuToggler.forEach(el => {
    el.addEventListener("click", showMenu)
});

dropNav.forEach(drop => {
    drop.classList.add("display__close")
})
const handleHamburger = (e) => {
    hamburger.getAttribute("src") == "./assets/icons/hamburger.svg" ? hamburger.setAttribute("src", "./assets/icons/cola_open.svg") : hamburger.setAttribute("src", "./assets/icons/hamburger.svg")
    leftToggle.classList.toggle("mobile__menu-display")
}
const menuFunc = (e) => {
    leftToggle.classList.toggle("left__panel-close")
    logoContent.classList.toggle("display__close")
    btnContent.classList.toggle("display__close")
    primaryBtn.classList.toggle("primary-close")
    navLink.forEach(nav => {
        nav.classList.toggle("nav_link-close")
    })
}
// Events
cola.addEventListener("click", menuFunc)
// leftToggle.addEventListener("mouseenter", colaHoverFunc)
hamburger.addEventListener("click", handleHamburger)
// --------------------------------------------
// })
navbarList.forEach((nav, index) => {
    nav.addEventListener("click", (e)=> {
        const ul = nav.nextElementSibling
        if(ul.classList.contains("drop__nav")){
            ul.classList.toggle("drop__nav-red")
            dropArr[index].classList.toggle("drop__arr-red")
            // 
        }
    })
})

// Event Listener
modalToggle.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.classList.add("modal_show")
    modalBox.classList.add("modal_box_show")
})
modalCnl.addEventListener("click", function(){
    modalContainer.classList.remove("modal_show")
    modalBox.classList.remove("modal_box_show")
})
modalContainer.addEventListener("click", function(){
    modalContainer.classList.remove("modal_show")
    modalBox.classList.remove("modal_box_show")
})
fullMode.addEventListener("click", function(){
    if(!document.requestFullscreen){
        document.documentElement.requestFullscreen()
    } else {
        if(document.exitFullscreen){
            document.exitFullscreen()
        }
    }
})

// Dragable scroll bar
const dragableScroll = document.querySelectorAll('.draggable');
let mouseDown = false;
let startX, scrollLeft;

dragableScroll.forEach(el => {
    let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
      };
      let stopDragging = function (event) {
        mouseDown = false;
      };
      
      el.addEventListener('mousemove', (e) => {
          e.preventDefault();
          if(!mouseDown) { return; }
          el.style.cursor = "move"
        const x = e.pageX - el.offsetLeft;
        const scroll = x - startX;
        el.scrollLeft = scrollLeft - scroll;
      });
      
      // Add the event listeners
      el.addEventListener('mousedown', startDragging, false);
      el.addEventListener('mouseup', stopDragging, false);
      el.addEventListener('mouseleave', stopDragging, false);
})

