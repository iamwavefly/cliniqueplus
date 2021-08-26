// modal target btn
const modalTarget = document.getElementById("modal-target")
// get data-handler value onclick
let triggerHandler 
// get modal container by data-handler
let triggerContainer
// get url from data-url
let targetUrl
// Get the button that opens the modal
let btn = document.querySelectorAll("#modal-handler");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

btn.forEach(el => {
  el.addEventListener('click', (e)=> {
    e.preventDefault()
    // getAttr
    triggerHandler = e.target.getAttribute('data-trigger')
    // assign data url
    targetUrl = e.target.getAttribute('data-url')
    // asign triggerContainer
    triggerContainer = document.getElementById(triggerHandler)
    // Get the modal
    triggerContainer.classList.add('modal-open');
  })  
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  triggerContainer.classList.remove('modal-open')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == triggerContainer) {
    triggerContainer.classList.remove('modal-open')
  }
}

// redirect the user
modalTarget.addEventListener('click', (e) => {
  e.preventDefault()
  window.location = targetUrl
})