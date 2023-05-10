import { openLogin, openRegister,  }from "./navPages.js";
import { selectByCategory } from "./filters.js";
import { allCategories, allCompanies, byCategoryName } from "./requests.js";
import { renderCompanies } from "./render.js";


openLogin()
openRegister()
 await selectByCategory(await allCategories())
await renderCompanies(await allCompanies())

 console.log(await byCategoryName("Varejo"))











