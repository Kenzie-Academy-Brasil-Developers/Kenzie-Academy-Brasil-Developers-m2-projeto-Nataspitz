


export  async function selectByCategory(value) {
    const object = await value 
    const select = document.querySelector("#slc_home")

    object.forEach( item => {
        //ul > li 
        const option = document.createElement("option")
        select.appendChild(option)
        option.innerText = item.name
    })
}