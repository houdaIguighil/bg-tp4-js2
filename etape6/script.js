"use strict";
let lignes = 0;
let total_points = 0;
const persons = [
   { nom: "nom-1", prenom: "prenon-2", points: 5 },
   { nom: "nom-2", prenom: "prenom-2", points: 10 },
   { nom: "nom-3", prenom: "prenom-3", points: 15 },
];
init();
function init(){
   for (const person of persons){
      doInsert(person.nom, person.prenom, person.points);
   }
}
function doInsert(nom, prenom, points){
   lignes++;
   total_points += points;
   doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}

function doInsertRowTable(num, nom, prenom, points){
   const table = document.getElementById("table_body");
   const row = document.createElement("tr");
   row.setAttribute("class", "row");
   const col1 = document.createElement("td");
   const col2 = document.createElement("td");
   const col3 = document.createElement("td");
   const col4 = document.createElement("td");
   const col5 = document.createElement("td");

   col1.innerText = num;
   col2.innerText = nom;
   col3.innerText = prenom;
   col4.innerText = points;
   col5.innerHTML = '<input type="checkbox">';

   col1.setAttribute("class", "col_number");
   col2.setAttribute("class", "col_text");
   col3.setAttribute("class", "col_text");
   col4.setAttribute("class", "col_number");
   col5.setAttribute("class", "col_chkbox");
   row.append(col1, col2, col3, col4, col5);
   table.append(row);
}
function ConsoleTableau(){
   console.log(persons);
}
function update_summary(){
    const nb_lignes =document.getElementById("p1");
    const total = document.getElementById("p3");

   nb_lignes.innerText = lignes + " ligne(s)";
   total.innerText = "Total point(s)=" + total_points;
}
function doNewData(){
   const nom = document.getElementById("form_nom").value;
   const prenom = document.getElementById("form_prenom").value;
   const points = document.getElementById("form_points").value;

   if (nom.trim() === "" || prenom.trim() === "" || points === ""){
      alert("Veuillez remplir tous les champs !");
      return;
   }
   persons.push({ nom: nom, prenom: prenom, points: Number(points) });
   doInsert(nom, prenom, Number(points));
   
   const champ_nom = document.getElementById("form_nom");
   const champ_prenom = document.getElementById("form_prenom");
   const champ_points = document.getElementById("form_points");
  
   champ_nom.value = "";
   champ_prenom.value = "";
   champ_points.value = "";
}
function deleteRow(){
    if (lignes === 0) {
    alert("Le tableau est vide !");
    return;
    }

    const table = document.getElementById("table_body");
    const checkedBoxes = table.querySelectorAll(".col_chkbox input[type='checkbox']:checked");

    if (checkedBoxes.length === 0) {
    alert("Sélectionnez au moins une ligne !");
    return;
    }

    if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
    return;
    }

    const rows = table.querySelectorAll("tr");

    for (let i = rows.length - 1; i > 0; i--) {

        const checkbox = rows[i].querySelector(".col_chkbox input");

        if (checkbox.checked) {

            const points = Number(rows[i].cells[3].innerText);

            total_points -= points;
            lignes--;

            persons.splice(i - 1, 1);

            rows[i].remove();
        }
    }
    alert("Suppression effectuée avec succès !");
    update_summary();
}
