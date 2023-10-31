document.addEventListener("scroll", (e) => {
    var welcomeText = document.getElementById("welcome-text")
    var navbar = document.getElementById("navbar")
    var height = welcomeText.offsetTop - welcomeText.scrollHeight
    if((welcomeText.offsetTop - navbar.scrollHeight) < document.documentElement.scrollTop){
        navbar.classList.add("bg-black")
    }else{
        navbar.classList.remove("bg-black")
    }
})