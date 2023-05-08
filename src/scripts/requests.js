import { toast } from "./toast.js"

const token = JSON.parse(localStorage.getItem("@Empresas : token")) || ""
const urlBase = "http://localhost:3333"
const requestHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
}
export const green = "#36B37E"
export const red = "#FF5630"

export async function allCategories(){
    const urlCategory = await fetch(`${urlBase}/categories/readAll`, {
        method: "GET"
    })
    try {
        const response = urlCategory
        return await response.json()
    } catch (error) {
        console.error(error)
    }
    return urlCategory
}

export async function byCategoryId(id) {
    const urlFilter = await fetch(`${urlBase}/companies/readByCategory/${id}`, {
        method: "GET"
    })
    try {
        const response = urlFilter
        return  await response.json()
    } catch (error) {
        console.error(error)
    }
    return urlFilter
}

export async function allCompanies(){
    const urlCompany = await fetch(`${urlBase}/companies/readAll`, {
        method: "GET"
    })
    try {
        const response = urlCompany
        return await response.json()
    } catch (error) {
        console.error(error)
    }
    return urlCompany
}

//Funçoes abaixo baseadas na DEMO
export async function createEmployee(body) {
    console.log(body)
const urlTask = await fetch(`${urlBase}/employees/create`, {
        method: "POST",
        headers : requestHeader,
        body: JSON.stringify(body)
    })
    .then(async (res) =>{
        if (res.ok) {
            toast(green, "Bem Vindo(a) à Kenzie Empresas")
            location.replace("./login.html")
            return  await res.json()
        }else{
            const response = await res.json()
            toast(red, response.message)
        }
    })
    .catch((error)=> {
        console.log(error)
    })
    return urlTask
}

export async function loginAccount(loginBody) {
    const urlLogin = await fetch(`${urlBase}/auth/login`, {
        method: "POST",
        headers: requestHeader,
        body: JSON.stringify(loginBody)
    })

    .then( async (res) =>{
        if (res.ok) {
            const resJson = await res.json()
            const {authToken, isAdm} = resJson
            localStorage.setItem("@Empresas : token", JSON.stringify(authToken))

           if (isAdm) {
            location.replace("./admin.html")
           }else{
            location.replace("./common.html")
           }
        
        }else{
            await res.json()
            toast(red, "Login inválido")
        }
    })
    return urlLogin
}





