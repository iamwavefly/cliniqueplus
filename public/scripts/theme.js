const themeChanger = document.querySelector("#theme_changer")
let theme = localStorage.getItem("theme")
let root = document.documentElement
    
const enableDarkMode = () => {
    root.style.setProperty("--light-color-2","#252a3f")

    console.log(1++)
}
const disableDarkMode = () => {


    localStorage.setItem("theme", null)
}

// if (theme === "enabled") {
//     enableDarkMode()
// }

themeChanger.addEventListener("click", function(){
    enableDarkMode()
    // theme = localStorage.getItem("theme")
    // if(theme !== "enabled") {
    //     enableDarkMode()
    //     console.log(theme);
    // } else {
    //     disableDarkMode()
    //     console.log(theme);
    // }
})