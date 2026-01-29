const hamburgerMenuBtn = document.querySelector(".hamburger-menu")

hamburgerMenuBtn.addEventListener("click", function(e){
    document.querySelector(".modal-navmenu-mobile").classList.toggle('hidden')
})