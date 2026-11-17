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
// Ici on appelle la fonction init pour initialiser l'affichage des personnes (vu dans le slide 45).
init();
// Ici on déclare une fonction qui permet d'initialiser le tableau (vu dans le slide 45).
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
   col5.setAttribute("class", "col_chkbox");
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
   const nb_lignes =document.getElementById("p1");
   // Ici on récupère le paragraphe HTML qui affiche le total des points grâce à son identifiant (vu dans le slide 65).
   const total = document.getElementById("p3");
   // Ici on affiche le nombre de lignes dans la page HTML (vu dans le slide 91).
   nb_lignes.innerText = lignes + " ligne(s)";
   // Ici on affiche le total des points dans la page HTML (vu dans le slide 91).
   total.innerText = "Total point(s)=" + total_points;
}
// Ici on déclare une fonction qui permet d'ajouter une nouvelle personne à partir du formulaire (vu dans le slide 45).
function doNewData(){
   // Ici on récupère les valeurs saisies dans les champs du formulaire grâce à leur identifiant (vu dans le slide 65).
   const nom = document.getElementById("form_nom").value;
   const prenom = document.getElementById("form_prenom").value;
   const points = document.getElementById("form_points").value;
   // Ici on utilise une condition pour vérifier si un ou plusieurs champs sont vides (vu dans les slides 42 et 43).
   if (nom.trim() === "" || prenom.trim() === "" || points === ""){
      // Ici on affiche un message d'alerte à l'utilisateur (vu dans le slide 34).
      alert("Veuillez remplir tous les champs !");
      // Ici on arrête l'exécution de la fonction avec return.
      return;
   }
   // Ici on ajoute un nouvel objet dans le tableau persons avec la méthode push (vu dans le slide 38).
   persons.push({ nom: nom, prenom: prenom, points: Number(points) });
   // Ici on appelle la fonction doInsert pour afficher la nouvelle personne et mettre à jour les totaux (vu dans le slide 45).
   doInsert(nom, prenom, Number(points));
   // Ici on récupère les champs du formulaire grâce à leur identifiant (vu dans le slide 65).
   const champ_nom = document.getElementById("form_nom");
   const champ_prenom = document.getElementById("form_prenom");
   const champ_points = document.getElementById("form_points");
   // Ici on vide les champs du formulaire après l'ajout de la personne.
   champ_nom.value = "";
   champ_prenom.value = "";
   champ_points.value = "";
}
// Ici on déclare une fonction qui permet de supprimer les lignes sélectionnées du tableau (vu dans le slide 45).
function deleteRow(){
   // Ici on utilise une condition pour vérifier si le tableau est vide (vu dans les slides 42 et 43).
   if (lignes === 0) {
      // Ici on affiche un message d'alerte à l'utilisateur (vu dans le slide 34).
      alert("Le tableau est vide !");
      // Ici on arrête l'exécution de la fonction avec return.
      return;
   }
   // Ici on récupère le corps du tableau grâce à son identifiant (vu dans le slide 65).
   const table = document.getElementById("table_body");
   // Ici on récupère les cases à cocher sélectionnées à l'aide d'un sélecteur CSS (vu dans les slides 76 à 78).
   const checkedBoxes = table.querySelectorAll(".col_chkbox input[type='checkbox']:checked");
   // Ici on vérifie si aucune case à cocher n'est sélectionnée (vu dans les slides 42 et 43).
   if (checkedBoxes.length === 0) {
      // Ici on affiche un message demandant de sélectionner au moins une ligne (vu dans le slide 34).
      alert("Sélectionnez au moins une ligne !");
      // Ici on arrête l'exécution de la fonction avec return.
      return;
   }
   // Ici on demande à l'utilisateur de confirmer la suppression.
   if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
      // Ici on arrête la fonction si l'utilisateur annule la suppression.
      return;
   }
   // Ici on récupère toutes les lignes du tableau à l'aide d'un sélecteur CSS (vu dans les slides 76 à 78).
   const rows = table.querySelectorAll("tr");
   // Ici on utilise une boucle for pour parcourir les lignes du tableau en commençant par la dernière (vu dans le slide 44).
   for (let i = rows.length - 1; i > 0; i--) {
      // Ici on récupère la case à cocher de chaque ligne à l'aide d'un sélecteur CSS (vu dans les slides 76 à 78).
      const checkbox = rows[i].querySelector(".col_chkbox input");
      // Ici on vérifie si la case à cocher de la ligne est sélectionnée (vu dans les slides 42 et 43).
      if (checkbox.checked) {
         // Ici on récupère les points de la ligne et on les convertit en nombre.
         const points = Number(rows[i].cells[3].innerText);
         // Ici on soustrait les points de la ligne supprimée du total des points (vu dans le slide 41).
         total_points -= points;
         // Ici on décrémente le nombre de lignes (vu dans le slide 41).
         lignes--;
         // Ici on supprime l'objet correspondant dans le tableau persons avec la méthode splice (vu dans le slide 38).
         persons.splice(i - 1, 1);
         // Ici on supprime la ligne sélectionnée du tableau HTML avec la méthode remove (vu dans le slide 100).
         rows[i].remove();
      }
   }
   // Ici on affiche un message pour confirmer que la suppression est effectuée (vu dans le slide 34).
   alert("Suppression effectuée avec succès !");
   // Ici on appelle la fonction update_summary pour actualiser le résumé après la suppression (vu dans le slide 45).
   update_summary();
}

// Fonction 1 : Tout sélectionner / Tout désélectionner
function selectAllRows() {
    // On récupère toutes les cases à cocher du tableau.
    // Ici, on utilise querySelectorAll (vu dans les slides 76 à 78).
    const checkboxes = document.querySelectorAll(
        "#table_body .col_chkbox input[type='checkbox']"
    );
    // On vérifie si toutes les cases sont déjà cochées.
    let toutEstCoche = true;
    // Ici, on utilise une boucle (vu dans le slide 44).
    for (const checkbox of checkboxes) {
        if (!checkbox.checked) {
            toutEstCoche = false;
        }
    }
    // On inverse l'état de toutes les cases.
    for (const checkbox of checkboxes) {
        checkbox.checked = !toutEstCoche;
    }
}
// Fonction 2 : Calculer la moyenne des points
function afficherMoyenne() {
    // On vérifie si le tableau contient des personnes.
    if (lignes === 0) {
        alert("Le tableau est vide !");
        return;
    }
    // On calcule la moyenne des points.
    const moyenne = total_points / lignes;
    // On affiche le résultat.
    alert("La moyenne des points est : " + moyenne.toFixed(2));
}
// Fonction 3 : Vider complètement le tableau
function viderTableau() {
    // On demande une confirmation avant la suppression.
    if (!confirm("Voulez-vous vraiment vider le tableau ?")) {
        return;
    }
    // On récupère le tableau HTML par son identifiant.
    // Ici, on utilise getElementById (vu dans le slide 65).
    const table = document.getElementById("table_body");
    // On récupère toutes les lignes du tableau.
    const rows = table.querySelectorAll("tr");
    // On parcourt les lignes à partir de la dernière.
    // Ici, on utilise une boucle (vu dans le slide 44).
    // On commence à 1 pour conserver la ligne d'en-tête.
    for (let i = rows.length - 1; i >= 1; i--) {
        // On supprime la ligne HTML.
        // Ici, on utilise remove() (vu dans les slides 100 à 105).
        rows[i].remove();
    }
    // On supprime toutes les personnes du tableau persons.
    persons.splice(0, persons.length);
    // On remet les compteurs à zéro.
    lignes = 0;
    total_points = 0;
    // On actualise le résumé.
    update_summary();
    alert("Le tableau a été vidé avec succès !");
}

