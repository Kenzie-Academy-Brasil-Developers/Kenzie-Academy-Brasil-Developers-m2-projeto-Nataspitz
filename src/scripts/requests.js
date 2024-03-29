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

export async function byCategoryName(name) {
    const urlFilter = await fetch(`${urlBase}/companies/readByCategory/${name}`, {
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
const urlTask = await fetch(`${urlBase}/employees/create`, {
        method: "POST",
        headers : requestHeader,
        body: JSON.stringify(body)
    })
    .then(async (res) =>{
        if (res.ok) {
            toast(green, "Bem Vindo(a) à Kenzie Empresas")
            setTimeout( () =>{
                location.replace("./login.html")
            },2000 )
            return  await res.json()
        }else{
            toast(red, "Esses dados não podem ser preenchidos")
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
            localStorage.setItem("@Empresas : admin", JSON.stringify(isAdm))

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

export async function employeesProfile() {
    const urlProfile = await fetch(`${urlBase}/employees/profile`, {
        method: "GET",
        headers: requestHeader,
    })
    try {
        const response = urlProfile
        return await response.json()
    } catch (error) {
        console.error(error)
    }
    return urlProfile
}

export async function departmentById(id) {
    const urlDepartment = await fetch(`${urlBase}/departments/readById/${id}`, {
        method: "GET",
        headers: requestHeader
    })
    try {
        const res = urlDepartment
        return await res.json()
    } catch (error) {
        console.error(error)
    }
    return urlDepartment
}

export async function allEmployees() {
    const urlEmployees = await fetch(`${urlBase}/employees/readAll`, {
        method: "GET",
        headers: requestHeader
    })
    try {
        const res = urlEmployees
        return await res.json()
    } catch (error) {
        console.error(error)
    }
    return urlEmployees
}

export async function companyId(id){
    const urlCompany = await fetch(`${urlBase}/companies/readById/${id}`, {
        method: "GET",
        headers: requestHeader
    })
    try {
        const res = urlCompany
        return await res.json()
    } catch (error) {
        console.error(error)
    }
    return urlCompany
} 

export async function createDeparment(body) {
    const urlCreate = await fetch(`${urlBase}/departments/create`, {
        method: "POST",
        headers : requestHeader,
        body: JSON.stringify(body)
    })
    .then( async (res) =>{
        if (res.ok) {
            toast(green,"Depatramento criado")
            return  await res.json()
        }else{
            toast(red, "Não foi possivel criar departamento")
        }
    })
    return urlCreate
}

export async function requestEditUser(id, body) {
    const urlEdit = await fetch(`${urlBase}/employees/updateEmployee/${id}`, {
        method: "PATCH",
        headers : requestHeader,
        body: JSON.stringify(body)
    })
    .then(async (res) =>{
        if (res.ok) {
            toast(green,"Usuário editado")
            return  await res.json()
        }else{
            toast(red, "dados inválidos")
        }
    })
    return urlEdit
}

export async function requestDeleteUser(id ) {
    const urlDelete = await fetch(`${urlBase}/employees/deleteEmployee/${id}`, {
        method: "DELETE",
        headers : requestHeader,
    })
    .then( async (res) =>{
        if (res.ok) {
            toast(green,"Usuário excluído")
            return await res.json()
        }else{ console.error("erro")}
    })

     return urlDelete
}

export async function requestDeleteDepatment(id) {
    const urlDelete = await fetch(`${urlBase}/departments/delete/${id}`, {
        method: "DELETE",
        headers : requestHeader,
    })
    .then( async (res) =>{
        if (res.ok) {
            toast(green,"Departamento excluído")
            return await res.json()
        }else{ console.error("erro")}
    })

     return urlDelete
}

export async function requestEdiitDepartment(id, body) {
    const urlEdit = await fetch(`${urlBase}/departments/update/${id}`, {
        method: "PATCH",
        headers : requestHeader,
        body: JSON.stringify(body)
    })
    .then(async (res) =>{
        if (res.ok) {
            toast(green,"Descrição editada")
            return  await res.json()
        }else{
            toast(red, "Essa descrição já existe")
        }
    })
    return urlEdit
}

export async function resquestEmployeesNoDepartment() {
    const urlEmployees = await fetch(`${urlBase}/employees/outOfWork`, {
        method: "GET",
        headers: requestHeader
    })
    try {
        const res = urlEmployees
        return await res.json()
    } catch (error) {
        console.error(error)
    }
    return urlEmployees
}

export async function requestHire(id, body) {
    const urlEmployee = await fetch(`${urlBase}/employees/hireEmployee/${id}`, {
        method: "PATCH",
        headers : requestHeader,
        body: JSON.stringify(body)
    })
    .then(async (res) =>{
        if (res.ok) {
            toast(green,"Funcionário contratado com sucesso")
            return  await res.json()
        }
    })
    return urlEmployee
}

export async function requestDismiss(id) {
    const urlEmployee = await fetch(`${urlBase}/employees/dismissEmployee/${id}`, {
        method: "PATCH",
        headers : requestHeader
    })
    .then(async (res) =>{
        if (res.ok) {
            toast(green,"Funcionário desligado com sucesso")
            return  await res.json()
        }
    })
    return urlEmployee
}




