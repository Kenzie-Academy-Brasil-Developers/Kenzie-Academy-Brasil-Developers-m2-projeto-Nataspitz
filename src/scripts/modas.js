import { renderAllEmployees } from "./render.js"
import { allCompanies, createDeparment, requestDeleteUser, requestEditUser } from "./requests.js"


export function openCreateDeparment() {
    const buttonOpen = document.querySelector("#create_department")
    const modal = document.querySelector(".modal__CreateDepartment")
    
    buttonOpen.addEventListener("click", () =>{
        modal.showModal()
    })
    
}

export async  function createDepartment() {
    let dataBase = {}
    const companies = await allCompanies()
    const buttonX = document.querySelector(".buttonX")

    const select = document.querySelector("#select__createDepartment")
    select.setAttribute("name", "company_id")
    
    companies.forEach(company =>{
        const option = document.createElement("option")
        select.appendChild(option)
        option.innerText = company.name
        option.value = company.id
    })
    
    const submit = document.querySelector("#createDepartment")
    const inputs = document.querySelectorAll(".createDepartment__form > input")
    
    select.addEventListener("change", () =>{
        dataBase[select.name] = select.value
    })
    
    
    submit.addEventListener("click", (event) =>{
        const modal = document.querySelector(".modal__CreateDepartment")
        event.preventDefault()
        
        inputs.forEach(input =>{
            dataBase[input.name] = input.value
        })
        createDeparment(dataBase)
        modal.close()
    })
    
    buttonX.addEventListener("click", () =>{
        const modal = document.querySelector(".modal__CreateDepartment")
        modal.close()
    })
}

export function editUser(user) {
    const  inputs = document.querySelectorAll(".editUser__form  input")
    const button  = document.querySelector("#editUser")
    let dataBase = {}

    

    inputs.forEach( input => {
    
      console.log(dataBase[input.name] = input.innerText)
        
    })
    
    console.log(dataBase);
    button.addEventListener("click", async (event) =>{
        event.preventDefault()
        const modal = document.querySelector(".modal__editUser")
        console.log(dataBase);
         await requestEditUser(user.id, dataBase)
        modal.close()
    })
    
}

export function deleteUser(user) {
    const modal = document.querySelector(".modal__deleteUser")
    const buttonX = document.querySelector(".button__X")
    const span = document.querySelector("#text__usuario")
    const button = document.querySelector(".removeUser")
    span.innerHTML = user.name

    button.addEventListener("click", async (event) =>{
        event.preventDefault()
        modal.close()
        await requestDeleteUser(user.id)
        await renderAllEmployees()
    })
    
    buttonX.addEventListener("click", () =>{
        modal.close()
    })

}






    