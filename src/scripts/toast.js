
//A criação do toast foi baseada na DEMO
export function toast(color , message) {
    const body = document.querySelector("body")

    //body > div
    const div = document.createElement("div")
    body.appendChild(div)
    div.classList.add("toast__container")
    div.style = `background-color: ${color}; border-color: ${color}`

    //div > p
    const p = document.createElement("p")
    p.classList.add("text__toast")
    div.appendChild(p)
    p.innerText = message

    //temporizador
    setTimeout(() =>{
        div.classList.add("toast__remove")
    }, 3000)
    setTimeout(() =>{
        div.classList.remove("toast__remove")
        body.removeChild(div)
    }, 4999)
}