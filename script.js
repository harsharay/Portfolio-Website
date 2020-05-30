let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let skillset = document.querySelectorAll(".skillset")
let footer = document.querySelector(".footer")

let now = new Date();

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open")
})

skillset.forEach(item => {
    item.addEventListener("mouseover",() => {
       item.style.backgroundColor = "white"
       
    })
    item.addEventListener("mouseout",() => {
        item.style.backgroundColor = "#aaff00"
        
    })
})


footer.innerHTML += `<h4>&copy ${now.getFullYear()} Harsha. All Rights Reserved</h4>`
