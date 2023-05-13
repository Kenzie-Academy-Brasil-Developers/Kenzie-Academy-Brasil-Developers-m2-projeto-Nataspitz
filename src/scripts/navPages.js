export function openLogin() {
    const buttonLogin = document.querySelector("#login")
    
    buttonLogin.addEventListener("click", () =>{
        location.replace("./src/pages/login.html")
    })
}

export function openRegister() {
    const buttonRegister = document.querySelector("#register")

    buttonRegister.addEventListener("click", () =>{
        location.replace("./src/pages/register.html")
    })
}

export  function loginForHome() {
    const buttonHome = document.querySelector("#home")

    buttonHome.addEventListener("click",  () =>{
        location.replace("../../index.html")
    })
}

export function loginForRegister() {
    const buttonsRegister = document.querySelectorAll(".register")

    buttonsRegister.forEach( button =>{
        button.addEventListener("click", () =>{
            location.replace("../pages/register.html")
        })
    })
}

export function registerForLogin() {
    const burronLogin = document.querySelector(".login")

    burronLogin.addEventListener("click", () =>{
        location.replace("../pages/login.html")
    })
}

export function registerForHome() {
    const buttonHome = document.querySelectorAll(".home")

    buttonHome.forEach( home =>{
        home.addEventListener("click", () =>{
            location.replace("../../index.html")
    })
    })
}

export function authorizationAdmin() {
    const admin = JSON.parse(localStorage.getItem("@Empresas : admin"))
    const token = JSON.parse(localStorage.getItem("@Empresas : token"))

    if (!token) {
        location.replace("../../index.html")
    }else if (token && !admin) {
        location.replace("./common.html")
    }
}

export function authorizationComoon() {
    const admin = JSON.parse(localStorage.getItem("@Empresas : admin"))
    const token = JSON.parse(localStorage.getItem("@Empresas : token"))

    if (!token) {
        location.replace("../../index.html")
    }else if (token && admin) {
        location.replace("./admin.html")
    }
}


export function authorizationDontLogin() {
    const admin = JSON.parse(localStorage.getItem("@Empresas : admin"))
    const token = JSON.parse(localStorage.getItem("@Empresas : token"))

    if (token && !admin) {
        location.replace("./common.html")
    }else if (token && admin) {
        location.replace("./admin.html")
    }
}

export function logout() {
    const logout = document.querySelector("#logout")

    logout.addEventListener("click", () =>{
        localStorage.clear()
        location.replace("../../index.html")
    })
}





