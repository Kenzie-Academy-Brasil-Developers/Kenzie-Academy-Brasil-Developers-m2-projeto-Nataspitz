import { allEmployees, companyId, employeesProfile } from "./requests.js"

export async function renderCompanies(value) {
    const object = await value
    const select = document.querySelectorAll("option")
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

        /*//li > span
        const span = document.createElement("span")
        li.appendChild(span)
        span.innerHTML = option.value
        */
        
    })

}



export async function  renderProfile() {
    const obj = await employeesProfile()
    const div = document.querySelector(".user__container")

    //div > h1
    const h2 = document.createElement("h2")
    div.appendChild(h2)
    h2.innerText = obj.name

    //div > span
    const span = document.createElement("span")
    div.appendChild(span)
    span.innerText = obj.email
}

export function employeeDontWork() {
    const div = document.querySelector(".department__container")

    // div  > span
    const h1 = document.createElement("h1")
    div.appendChild(h1)
    h1.innerHTML = "Você ainda não foi contratado"
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

    //divTitle > h1
    const h1 = document.createElement("h1")
    divTitle.appendChild(h1)
    h1.innerText= `${company.name} - ${department.name}`

    //divContainer > ul
    const ul = document.createElement("ul")
    divContainer.appendChild(ul)

    employees.forEach(employee =>{
        const li = document.createElement("li")
        ul.appendChild(li)

        //li > span
        const span = document.createElement("span")
        li.appendChild(span)
        span.innerText= employee.name
    })
}

export async function renderAllEmployees() {
    const employees = await allEmployees()
    // await companyId(id)
    const ul = document.querySelector(".users__list")

    employees.forEach( async employee =>{
        //ul > li 
        const li = document.createElement("li")
        ul.appendChild(li)

        //li > divEmployee
        const divEmployee = document.createElement("div")
        li.appendChild(divEmployee)
    
        //divEmployee > p
        const p = document.createElement("p")
        divEmployee.appendChild(p)
        divEmployee.classList.add("list__data")
        p.innerText = employee.name

        //divEmployee > span
        const span = document.createElement("span")
        divEmployee.appendChild(span)
        const company = await companyId(employee.company_id)
        span.innerText = company. name || "Não contratado"
        
        //li > divButtons
        const divButton = document.createElement("div")
        li.appendChild(divButton)
        divButton.classList.add("list__buttons")
        li.appendChild(divButton)

        //divButtons > img
        const imgEdit = document.createElement("img")
        const imgDelete = document.createElement("img")
        divButton.appendChild(imgEdit)
        divButton.appendChild(imgDelete)
        imgEdit.src = "../assets/img/editar.png" 
        imgDelete.src = "../assets/img/remover.png" 
    })
}

export async function renderDepartment(arr) {
    const  departments = arr.departments 

    //container  > ul
    const container = document.querySelector(".department__container")
    const ul = document.createElement("ul")
    container.appendChild(ul)
    ul.innerText = ""
    
    departments.forEach(sector =>{
        //ul > li
        const li = document.createElement("li")
        ul.appendChild(li)
        li.classList.add("department__item")
        
        //li > divData
        const divData = document.createElement("div")
        li.appendChild(divData)
        divData.classList.add("department__data")

        //divData > p
        const p = document.createElement("p")
        divData.appendChild(p)
        p.innerText = sector.name

        //divData > spanDescription
        const spanDescription = document.createElement("span")
        divData.appendChild(spanDescription)
        spanDescription.innerText = sector.description

        //divData . spanCompany
        const spanCompany = document.createElement("span")
        divData.appendChild(spanCompany)
        spanCompany.innerText = arr.name

        //divButtons > li
        const divButton = document.createElement("div")
        li.appendChild(divButton)
        divButton.classList.add("department__buttons")
        li.appendChild(divButton)

        //divButtons > img
        const imgView = document.createElement("img") 
        imgView.classList.add("department__view")
        const imgEdit = document.createElement("img")
        imgEdit.classList.add("department__edit")
        const imgDelete = document.createElement("img")
        imgDelete.classList.add("department__delete")
        divButton.appendChild(imgView) 
        divButton.appendChild(imgEdit)
        divButton.appendChild(imgDelete) 
        imgView.src = "../assets/img/vizualizar.png" 
        imgEdit.src = "../assets/img/editar.png" 
        imgDelete.src = "../assets/img/remover.png" 
    })
    
}