import {  authorizationDontLogin, loginForHome, loginForRegister } from "./navPages.js";
import { loginAccount, red } from "./requests.js";
import { toast } from "./toast.js";

authorizationDontLogin()
function pullLogin() {
    const inputs = document.querySelectorAll(" form > input")
    const button = document.querySelector("form > button")
    let login = {}
    let count = 0
    
    button.addEventListener("click", async (event) =>{
        event.preventDefault()


        inputs.forEach(input =>{
            if (input.value.trim() == "") {
                count ++
            }
            login[input.name] = input.value
           
        })
        
        if (count /= 0) {
            count = 0
            return toast(red, "Por favor preencha todos os campos")
        }else{ 
            const token = loginAccount(login)
            return token
        }
    })
    
}
pullLogin()
loginForRegister()
loginForHome()


