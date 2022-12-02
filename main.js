//function ajouterNote() {
//  console.log("jdoiewjdoewi")
//}

//création des variales
let boutton = document.getElementById("addButton1")

let modules = document.getElementById("module1")

let notes = document.getElementById("note1")

let table = document.getElementById("table1")



//ajouter un event sur le boutton 
boutton.addEventListener("click", (event) => {

    //il faut empécher le rechargement de la page
    event.preventDefault()
    console.log("d9ueuhdeo")

    //créer un élément tr
    let tr = document.createElement("tr")

    //créer un élément td
    let tdNote = document.createElement("td")
    let tdModule = document.createElement("td")

    //remplir l'élément td avec la note du input
    tdNote.innerHTML = notes.value
    tdModule.innerHTML = notes.value

    //ajouter l'élément td dans l'élément tr
    tr.appendChild(tdNote)
    tr.appendChild(tdModule)

    //ajouter l'élément tr dans la table
    table.appendChild(tr)


})
//



