
export async function renderCompanies(value) {
    const object = await value
    const ul = document.querySelector(".companies__list")

    object.forEach(item => {
        // ul > li
        const li = document.createElement("li")
        ul.appendChild(li)
        li.classList.add("companies__card")

        //li > h3
        const h3 = document.createElement("h3")
        li.appendChild(h3)
        h3.innerHTML = item.name
    })
}