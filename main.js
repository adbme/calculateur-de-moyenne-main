//function ajouterNote() {
//  console.log("jdoiewjdoewi")
//}

//création des variales
let boutton = document.getElementById("addButton1")

let modules = document.getElementById("module1")

let notes = document.getElementById("note1")

let table = document.getElementById("table2")


//ajouter un event sur le boutton 
boutton.addEventListener("click", (event) => {

})
//

let bouttons = document.getElementsByClassName("button1")
console.log(bouttons)


Array.from(bouttons).forEach(btn => {
    btn.addEventListener("click", ajouterNote)
});

function ajouterNote(event) {

    console.log(event.target)
    let table2 = event.target.parentElement.parentElement.nextElementSibling.firstElementChild
    console.log(table2)

    // event.target = boutton / previousSibling pour l'élément d'à coté /  
    let module2 = event.target.previousSibling.previousSibling
    console.log(module2)

    let note2 = event.target.previousSibling.previousSibling.previousSibling.previousSibling


    //il faut empécher le rechargement de la page
    console.log("pdjednoe")
    event.preventDefault()

    let tr = document.createElement("tr")

    //créer un élément td
    let tdNote = document.createElement("td")
    let tdModule = document.createElement("td")

    //remplir l'élément td avec la note du input

    //                 à faire
    tdNote.innerHTML = note2.value
    tdModule.innerHTML = module2.value

    //ajouter l'élément td dans l'élément tr
    tr.appendChild(tdNote)
    tr.appendChild(tdModule)

    //ajouter l'élément tr dans la table
    table2.appendChild(tr)
}