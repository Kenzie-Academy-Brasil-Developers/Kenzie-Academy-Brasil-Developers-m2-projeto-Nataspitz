import { authorizationDontLogin, registerForHome, registerForLogin } from "./navPages.js";
import { createEmployee, red } from "./requests.js";
import { toast } from "./toast.js";

authorizationDontLogin()
function createNewAccount() {
    const inputs = document.querySelectorAll("form > input")
    const button = document.querySelector("form > button")
    let create = {}
    console.log(create)

    button.addEventListener("click",async (event)  =>{
        event.preventDefault()

        inputs.forEach((input) =>{
            if (input.value.trim() == "") {
                return toast(red, "Preencha todos os dados")
            }
            create[input.name] = input.value

        })
        await createEmployee(create)
    })

}
console.log(createNewAccount())


registerForHome()
registerForLogin()
