
export  async function selectByCategory(value) {
    const object = await value 
    const select = document.querySelector("#slc_home")

    object.forEach( item => {
        //select > option 
        const option = document.createElement("option")
        select.appendChild(option)
        option.innerText = item.name
        option.value = item.id
    
    })

    select.addEventListener("change", () =>{
        console.log(select.value)
    })

}