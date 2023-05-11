import { renderDepartment } from "./render.js"
import { allCategories, allCompanies, companyId } from "./requests.js"

export  async function selectByCategory() {
    const object = await allCategories()
    const select = document.querySelector("#slc_home")

    object.forEach( item => {
        //select > option 
        const option = document.createElement("option")
        select.appendChild(option)
        option.innerText = item.name
        option.value = item.name
    
    })

    select.addEventListener("change", () =>{
        console.log(select.value)
    })

}

export async function setectAllCompanies() {
    const object = await allCompanies()
    const select = document.querySelector("#companies")

    object.forEach(item =>{
        //select > option
        const option = document.createElement("option")
        select.appendChild(option)
        option.innerText = item.name
        option.value = item.id
    })

    select.addEventListener("change", async () =>{
        const company = await companyId(select.value)
        const div = document.querySelector(".department__container")
        const p = document.createElement("p")
        div.innerText = ""
    
        
        if (company.departments.length > 0) {
            renderDepartment(company)
        }else if (select.innerText == "Selecione uma empresa") {                
            const pHtml = document.querySelector("#dpt__text")
            div.append(pHtml)
            pHtml.innerHTML = pHtml.innerText
        }else {
            div.appendChild(p)
            p.innerText = `Empresa ${company.name} não possui departamento`
            p.classList.add("department__text")
        }
        
     })

}