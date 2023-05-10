import { allCategories } from "./requests.js"

export  async function selectByCategory() {
    const object = await allCategories()
    const select = document.querySelector("#slc_home")

    object.forEach( item => {
        //select > option 
        const option = document.createElement("option")
        select.appendChild(option)
        option.innerText = item.name
        option.value = item.name
    
    })

    select.addEventListener("change", () =>{
        console.log(select.value)
    })

}