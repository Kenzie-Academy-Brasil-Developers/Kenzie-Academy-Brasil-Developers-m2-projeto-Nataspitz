import { authorizationDontLogin, registerForHome, registerForLogin } from "./navPages.js";
import { createEmployee, red } from "./requests.js";
import { toast } from "./toast.js";

authorizationDontLogin()
function createNewAccount() {
    const inputs = document.querySelectorAll("form > input")
    const button = document.querySelector("form > button")
    let count = 0
    let create = {}


    button.addEventListener("click",async (event)  =>{
        event.preventDefault()

        inputs.forEach((input) =>{
            if (input.value.trim() == "") {
                count++
            }
            create[input.name] = input.value

        })

        if (count != 0) {
            count = 0
            return toast(red, "Preencha todos os dados")
        }else{
            const token = await createEmployee(create)
            return token
        }

    })

}
console.log(createNewAccount())


registerForHome()
registerForLogin()
