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
   // Ici on insère du texte dans les cellules (vu dans le slide 91).
   col1.innerText = num;
   col2.innerText = nom;
   col3.innerText = prenom;
   col4.innerText = points;
   // Ici on insère un code HTML dans la cinquième cellule (vu dans le slide 91).
   col5.innerHTML = '<input type="checkbox">';
   // Ici on définit les classes CSS des cellules (vu dans le slide 107).
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
