import { renderAllEmployees } from "./render.js";
import { allEmployees, companyId } from "./requests.js";


console.log(await allEmployees())
renderAllEmployees()
console.log(await companyId("f170b435-ec69-43eb-9ba0-e6daa23f63e8"));