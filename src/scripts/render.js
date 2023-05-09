import { employeesProfile } from "./requests.js"

export async function renderCompanies(value) {
    const object = await value
    const ul = document.querySelector(".companies__list")
    ul.innerHTML = ""

    object.forEach(item => {
        // ul > li
        const li = document.createElement("li")
        ul.appendChild(li)
        li.classList.add("companies__card")

        //li > h3
        const h3 = document.createElement("h3")
        li.appendChild(h3)
        h3.innerHTML = item.name
    })
}



export async function  renderProfile() {
    const obj = await employeesProfile()
    const div = document.querySelector(".user__container")

    //div > h1
    const h1 = document.createElement("h1")
    div.appendChild(h1)
    h1.innerText = obj.name

    //div > span
    const span = document.createElement("span")
    div.appendChild(span)
    span.innerText = obj.email
}

export function employeeDontWork() {
    const div = document.querySelector(".department__container")

    // div  > span
    const h2 = document.createElement("h2")
    div.appendChild(h2)
    h2.innerHTML = "Você ainda não foi contratado"
}

export function hiredEmployee(department) {
    const divContainer = document.querySelector(".department__container")
    const  company = department.company
    const employees = department.employees
    console.log(employees);

    //divContainer > divTitle
    const divTitle = document.createElement("div")
    divContainer.appendChild(divTitle)
    divTitle.classList.add("department__title")

    //divTitle > h2 
    const h2 = document.createElement("h2")
    divTitle.appendChild(h2)
    h2.innerText= `${company.name} - ${department.name}`

    //divContainer > ul
    const ul = document.createElement("ul")
    divContainer.appendChild(ul)

    employees.forEach(employee =>{
        const li = document.createElement("li")
        ul.appendChild(li)

        li.innerText = employee.name
    })
}