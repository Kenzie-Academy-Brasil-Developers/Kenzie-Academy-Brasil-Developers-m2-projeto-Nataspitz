import { loginForHome, loginForRegister } from "./navPages.js";
import { loginAccount, red } from "./requests.js";
import { toast } from "./toast.js";

function pullLogin() {
    const inputs = document.querySelectorAll(" form > input")
    const button = document.querySelector("form > button")
    let login = {}

    button.addEventListener("click", async (event) =>{
        event.preventDefault()

        inputs.forEach(input =>{
            if (input.value.trim() == "") {
                count ++
            }
            login[input.name] = input.value
           
            if (input /= 0) {
                return toast(red, "Por favor preencha todos os campos")
            }else{ 
                const token = loginAccount(login)
                return token
            }
        })

    })
    
}
pullLogin()

loginForRegister()
loginForHome()


