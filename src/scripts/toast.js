const green = "#36B37E"
const red = "#FF5630"

//A criação do toast foi baseada na DEMO

export function toast(color , message) {
    const body = document.querySelector("body")

    //body > div
    const div = document.createElement("div")
    body.appendChild(div)
    div.classList.add("toast__container")
    div.style.backgroundColor = color

    //div > p
    const p = document.createElement("p")
    div.appendChild(p)
    p.innerText = message

    //temporizador
    setTimeout(() =>{
        div.classList.add("toast__remove")
    }, 3000)
    setTimeout(() =>{
        body.removeChild(div)
    }, 4999)
}