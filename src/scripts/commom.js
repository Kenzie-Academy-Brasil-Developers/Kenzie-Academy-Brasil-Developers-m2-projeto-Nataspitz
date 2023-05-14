import { authorizationComoon, logout} from "./navPages.js";
import { employeeDontWork, hiredEmployee, renderProfile } from "./render.js";
import { departmentById, employeesProfile } from "./requests.js";

authorizationComoon()
await checkinCompany()
await renderProfile()
logout()


async function checkinCompany() {
    const obj = await employeesProfile()
    if (obj.company_id == null) {
        const container = document.querySelector(".department__container")
        container.classList.remove(".department__container")
        container.classList.add("department__text")
        employeeDontWork()
    }else{
        const sector = await departmentById(obj.department_id)
        hiredEmployee(sector)
    }
 
}
