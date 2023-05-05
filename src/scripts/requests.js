const urlBase = "http://localhost:3333"

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

export async function byCategory(category) {
    const urlFilter = await fetch(`${urlBase}/companies/readByCategory/${category}`, {
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




