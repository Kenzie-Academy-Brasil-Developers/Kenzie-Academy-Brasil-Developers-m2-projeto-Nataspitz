

export function deleteUser() {

    //dialog > buttonExit
    const modal = document.createElement(".modal__editUser")
    const buttonExit = document.createElement("button")
    modal.appendChild(buttonExit)
    buttonExit.innerText = "X"

    //dialog > divDelete
    const divDelete = document.createElement("div")
    modal.appendChild(divDelete)

    //divDelete > h2
    const h2 = document.createElement("h2")
    divDelete.append(h2)

}