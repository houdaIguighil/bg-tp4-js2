"use strict"; // Ici on active le mode strict pour éviter certaines erreurs (vu dans le slide 141).
// Ici on déclare une variable pour compter le nombre de lignes (vu dans le slide 37).
let lignes = 0;
// Ici on déclare une variable pour calculer le total des points (vu dans le slide 37).
let total_points = 0;
// Ici on crée un tableau contenant plusieurs objets avec leurs propriétés (vu dans les slides 39 et 40).
const persons = [
   { nom: "nom-1", prenom: "prenon-2", points: 5 },
   { nom: "nom-2", prenom: "prenom-2", points: 10 },
   { nom: "nom-3", prenom: "prenom-3", points: 15 },
];
// Ici on appelle la fonction init pour initialiser le tableau (vu dans le slide 45).
init();
// Ici on déclare une fonction qui permet d'initialiser l'affichage des personnes (vu dans le slide 45).
function init(){
   // Ici on utilise une boucle for...of pour parcourir les éléments du tableau persons (vu dans le slide 44).
   for (const person of persons){
      // Ici on appelle la fonction doInsert pour ajouter chaque personne (vu dans le slide 45).
      doInsert(person.nom, person.prenom, person.points);
   }
}

// Ici on déclare une fonction qui permet d'ajouter une personne et de calculer les totaux (vu dans le slide 45).
function doInsert(nom, prenom, points){
   // Ici on incrémente le nombre de lignes (vu dans le slide 41).
   lignes++;
   // Ici on ajoute les points de la personne au total des points (vu dans le slide 41).
   total_points += points;
   // Ici on appelle la fonction doInsertRowTable pour ajouter la personne dans le tableau HTML (vu dans le slide 45).
   doInsertRowTable(lignes, nom, prenom, points);
   // Ici on appelle la fonction update_summary pour actualiser le résumé (vu dans le slide 45).
   update_summary();
}
// Ici on déclare une fonction qui permet de créer et d'insérer une ligne dans le tableau HTML (vu dans le slide 45).
function doInsertRowTable(num, nom, prenom, points){
   // Ici on récupère le corps du tableau grâce à son identifiant (vu dans le slide 65).
   const table = document.getElementById("table_body");
   // Ici on crée une nouvelle ligne du tableau (vu dans le slide 104).
   const row = document.createElement("tr");
   // Ici on définit la classe CSS de la ligne (vu dans le slide 107).
   row.setAttribute("class", "row");
   // Ici on crée cinq cellules pour la nouvelle ligne (vu dans le slide 104).
   const col1 = document.createElement("td");
   const col2 = document.createElement("td");
   const col3 = document.createElement("td");
   const col4 = document.createElement("td");
   const col5 = document.createElement("td");
   // Ici on insère les valeurs sous forme de texte dans les cellules (vu dans le slide 91).
   col1.innerText = num;
   col2.innerText = nom;
   col3.innerText = prenom;
   col4.innerText = points;
   // Ici on insère un élément HTML input de type checkbox dans la cinquième cellule (vu dans le slide 91).
   col5.innerHTML = '<input type="checkbox">';
   // Ici on définit les classes CSS des cellules avec setAttribute (vu dans le slide 107).
   col1.setAttribute("class", "col_number");
   col2.setAttribute("class", "col_text");
   col3.setAttribute("class", "col_text");
   col4.setAttribute("class", "col_number");
   col5.setAttribute("class", "checkbox");
   // Ici on ajoute les cinq cellules dans la ligne (vu dans le slide 98).
   row.append(col1, col2, col3, col4, col5);
   // Ici on ajoute la ligne dans le corps du tableau (vu dans le slide 98).
   table.append(row);
}
// Ici on déclare une fonction qui permet d'afficher le tableau persons dans la console (vu dans le slide 45).
function ConsoleTableau(){
   // Ici on utilise console.log pour afficher le tableau dans la console (vu dans le slide 33).
   console.log(persons);
}
// Ici on déclare une fonction qui permet de mettre à jour le résumé du tableau (vu dans le slide 45).
function update_summary(){
   // Ici on récupère le paragraphe HTML qui affiche le nombre de lignes grâce à son identifiant (vu dans le slide 65).
   const nb_lignes = document.getElementById("p1");
   // Ici on récupère le paragraphe HTML qui affiche le total des points grâce à son identifiant (vu dans le slide 65).
   const total = document.getElementById("p3");
   // Ici on affiche le nombre de lignes dans la page HTML (vu dans le slide 91).
   nb_lignes.innerText = lignes + " ligne(s)";
   // Ici on affiche le total des points dans la page HTML (vu dans le slide 91).
   total.innerText = "Total point(s)=" + total_points;
}
