let buttons = document.getElementsByClassName("transport-button")
let forms = document.querySelectorAll("form")
let container = document.querySelector(".container")
let containerBefore = window.getComputedStyle(container,"::before")
console.log(containerBefore.backgroundColor)
// buttons.arry.forEach(ele => {
//     ele.addEventListener("click",()=>{
//         console.log("ss")
//     })
// })\
// Array.form(buttons).forEach(element => {
//     element.addEventListener("click",()=>{
//         console.log("S")
//     })
// });
buttonsArray = Array.from(buttons)
buttonsArray.reduce((acc,ele,i)=>{
    ele.addEventListener("click",()=>{
        ele.parentNode.classList.toggle("transport")
        acc.parentNode.classList.toggle("transport")
        container.style.setProperty("--pos" , "50%")
        acc.parentNode.style.color = "black"
        forms[0].classList.toggle("transport")
        forms[1].classList.toggle("transport")
        forms[0].style.color = "white"
        forms[1].style.color = "black"
    })
    acc.addEventListener("click",()=>{
        ele.parentNode.classList.toggle("transport")
        acc.parentNode.classList.toggle("transport")
        forms[0].classList.toggle("transport")
        forms[1].classList.toggle("transport")
        container.style.setProperty("--pos" , "0%")
        acc.parentNode.style.color = "white"
    })
})