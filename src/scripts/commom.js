import { employeeDontWork, hiredEmployee, renderProfile } from "./render.js";
import { departmentEmplouees, employeesProfile } from "./requests.js";

async function checkinCompany() {
    const obj = await employeesProfile()
    console.log(obj)
    if (obj.company_id == null) {
        employeeDontWork()
    }else{
        const sector = await departmentEmplouees(obj.department_id)
        console.log(sector)
        hiredEmployee(sector)
    }
 
}
await checkinCompany()

await renderProfile()


console.log()
