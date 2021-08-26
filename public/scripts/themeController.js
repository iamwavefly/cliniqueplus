const themeToggler = document.getElementById("themeToggler")
const activeNav = document.querySelector(".nav__active")
let root = document.documentElement
let localStorageTheme = localStorage.getItem("theme")

// change from light to night theme
const darkMode = () =>{
    // change light to dark color
    root.style.setProperty("--light-color","#222437")
    root.style.setProperty("--light-color-2","#1c1e2f")
    root.style.setProperty("--light-color-3","#252a3f")
    root.style.setProperty("--white-color","#252a3f")
    root.style.setProperty("--hightlight-color","#1c1e2f")
    // change dark to light color
    root.style.setProperty("--dark-color","#fafafa")
    root.style.setProperty("--dark-color-2","#eee")
    root.style.setProperty("--dark-color-3","#aaa")
    // change active nav color
    root.style.setProperty("--primary-color-temp","#eee")
}

// change from night to light theme
const lightMode = () =>{
    // change night to light color
    root.style.setProperty("--light-color","#fdfdfd")
    root.style.setProperty("--light-color-2","#fafafa")
    root.style.setProperty("--light-color-3","#eee")
    root.style.setProperty("--white-color","#fff")
    root.style.setProperty("--hightlight-color","#eee")
    // change light to night color
    root.style.setProperty("--dark-color","#333")
    root.style.setProperty("--dark-color-2","#555")
    root.style.setProperty("--dark-color-3","#666")
    // change active nav color
    root.style.setProperty("--primary-color-temp","#ed3237")
}

const enableDarkMode = () => {
    // change theme
    darkMode()
    // set enable in local storageif(localStorageTheme !== null && localStorageTheme === "enabled"){
    localStorage.setItem("theme", "enabled")
    // change toggler background
    themeToggler.style.background = "#eee"
    themeToggler.style.color = "#333"
}

const disableDarkMode = () => {
    // change theme
    lightMode()
    // remove prop from local storage
    localStorage.setItem("theme", null)

    // change toggler background
    themeToggler.style.background = "#333"
    themeToggler.style.color = "#fff"
}

if (localStorageTheme !== null && localStorageTheme === "enabled") {
    enableDarkMode()
}

// themeToggler.checked = false
// function toggleHangler(){
//     if(this.checked){
//         enableDarkMode()
//         localStorage.setItem("theme", "enabled")
//     }else {
//         localStorage.setItem("theme", null)
//     }
// }

themeToggler.addEventListener("click", function(){
    localStorageTheme = localStorage.getItem("theme")
    if(localStorageTheme !== 'enabled'){
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})