import { setectAllCompanies } from "./filters.js";
import { authorizationAdmin, logout } from "./navPages.js";
import { renderAllEmployees } from "./render.js";
import { allCompanies, allEmployees, companyId } from "./requests.js";

authorizationAdmin()
await allEmployees()
renderAllEmployees()
await setectAllCompanies()
console.log(await allCompanies());
logout()

