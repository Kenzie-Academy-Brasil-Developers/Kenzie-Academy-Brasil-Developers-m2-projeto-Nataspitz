import { setectAllCompanies } from "./filters.js";
import { createDepartment, openCreateDeparment } from "./modas.js";
import { authorizationAdmin, logout } from "./navPages.js";
import { renderAllEmployees } from "./render.js";
import { allCompanies, allEmployees, companyId, createDeparment } from "./requests.js";

authorizationAdmin()
await allEmployees()
renderAllEmployees()
await setectAllCompanies()



logout()


createDepartment()
openCreateDeparment()

//console.log(await createDeparment());