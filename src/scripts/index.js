import { openLogin, openRegister,  }from "./navPages.js";
import { selectByCategory } from "./filters.js";
import { allCategories, allCompanies } from "./requests.js";
import { renderCompanies } from "./render.js";


openLogin()
openRegister()
 await selectByCategory(await allCategories())
await renderCompanies(await allCompanies())


//console.log(byCategoryId())











