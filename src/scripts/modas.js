import { renderAllEmployees, renderDepartment } from "./render.js"
import { allCompanies, companyId, createDeparment, departmentById, requestDeleteDepatment, requestDeleteUser, requestDismiss, requestEdiitDepartment, requestEditUser, requestHire, resquestEmployeesNoDepartment } from "./requests.js"


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
        renderDepartment()
        modal.close()
    })
    
    buttonX.addEventListener("click", () =>{
        const modal = document.querySelector(".modal__CreateDepartment")
        modal.close()
    })
}

export async function viewDepartment(department) {
    const  noDepartment = await resquestEmployeesNoDepartment()
    const sector = await departmentById(department.id)
    const employees = sector.employees
    const company = sector.company
    const modal = document.querySelector(".modal__viewDepartment")
    const h2 = document.querySelector(".modal__viewDepartment > h2")
    const buttonX = document.querySelector(".viewDepartment__exit")
    const pDescription = document.querySelector(".modal__description")
    const select = document.querySelector(".select__noDepartment")
    const button = document.querySelector("#hire")
    const ul = document.querySelector(".modal__container > ul")
    let id = {}
    let departmentId = {"department_id": `${department.id}`}
    
    h2.innerText = department.name
    pDescription.innerText = department.description
    
    noDepartment.forEach(employee =>{
        const option = document.createElement("option")
        select.appendChild(option)
        option.innerText = employee.name
        option.value = employee.id
    })    

    select.addEventListener("change", () =>{
        id = select.value
    })
    
    button.addEventListener("click", (event) =>{
        event.preventDefault()
        modal.close()
        requestHire(id, departmentId)
    })

    employees.forEach(async (employee)  =>{
        const li = document.createElement("li")
        ul.appendChild(li)
        li.classList.add("list__employeeDismiss")
        
        const pName = document.createElement("p")
        li.appendChild(pName)
        pName.innerText =  employee.name

        const spanCompany = document.createElement("span")
        li.appendChild(spanCompany)
        spanCompany.innerText = company.name

        const buttonDismiss = document.createElement("button")
        li.appendChild(buttonDismiss)
        buttonDismiss.innerText = "Desligar"

        buttonDismiss.addEventListener("click", () =>{
            const modal = document.querySelector(".modal__viewDepartment")
            requestDismiss(employee.id)
            modal.showModal()
        })
    })

    buttonX.addEventListener("click", () =>{
        modal.close()
})
    
    
}

export function editDeptartment(department) {
    const modal = document.querySelector(".modal__editDepartment")
    const button = document.querySelector("#editDepartment")
    const buttonX = document.querySelector(".editDepartment__exit")
    const textarea = document.querySelector("form > textarea")
    textarea.innerHTML = department.description
    let dataBase = {}
    
    buttonX.addEventListener("click", () =>{
       modal.close()
    })

    button.addEventListener("click",async  (event) =>{
        event.preventDefault()
        dataBase[textarea.name] = textarea.value
        await requestEdiitDepartment(department.id, dataBase)
        modal.close()
        
    })
    

    
}

export function deleteDepartment(department) {
    const modal = document.querySelector(".modal__deleteDepartment")
    const buttonX = document.querySelector(".deleteDepartment__exit")
    const span = document.querySelector(".span__name")
    const button = document.querySelector("#removeDepartment")
    span.innerText = department.name
    
    button.addEventListener("click", async(event) =>{
        event.preventDefault()
        console.log(department);
        modal.close()
        await requestDeleteDepatment(department.id)
        const select = document.querySelector("#companies")
        const company = await companyId(select.value)
        await renderDepartment(company)
        
    })
    
    buttonX.addEventListener("click", () =>{
        modal.close()
    })
    
}

export function editUser(user) {
    const modal = document.querySelector(".modal__editUser")
    const buttonX = document.querySelector(".editUser__exit")
    const  inputs = document.querySelectorAll(".editUser__form  input")
    const button  = document.querySelector("#editUser")
    let dataBase = {}

  button.addEventListener("click", (event) =>{
    event.preventDefault()

    inputs.forEach(input =>{
        if (input.value.length) {
            dataBase[input.name] = input.value
        }
    })

    requestEditUser(user.id, dataBase)
    modal.close()
    renderAllEmployees()
  })
    
  buttonX.addEventListener("click", () =>[
    modal.close()
  ])
}

export function deleteUser(user) {
    const modal = document.querySelector(".modal__deleteUser")
    const buttonX = document.querySelector(".deleteUser__exit")
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






    