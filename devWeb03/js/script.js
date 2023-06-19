const data_test00 = 128;

// document.write(data_test00)

// le addEventListener n'est pas utile si la balise script est bien positionnee
// juste avant la balise de fin </body>
// si ce n'est pas le cas, elle permet d'attendre la fin du dom pour inserer le js
document.addEventListener("DOMContentLoaded", function() {
	const data_test00 = 128;
	document.getElementById("txtIci").innerHTML = data_test00;
  });






// Création des données du tableau AVEC EN TETE
  const tableData = [
    ["Nom", "Âge", "Ville"],
    ["Alice", 25, "Paris"],
    ["Bob", 30, "Londres"],
    ["Charlie", 35, "New York"],
];

// Création du tableau HTML
const table = document.createElement("table");

// Parcours des données et création des lignes du tableau
for (let i = 0; i < tableData.length; i++) {
    const rowData = tableData[i];
    const row = document.createElement("tr");

// Parcours des colonnes de chaque ligne et CREATION DES EN TETE
    for (let j = 0; j < rowData.length; j++) {
        const cellData = rowData[j];
        const cell = document.createElement(i === 0 ? "th" : "td");
        cell.textContent = cellData;
        row.appendChild(cell);
    }

    table.appendChild(row);
}

// Ajout du tableau au conteneur dans la page HTML
const tableContainer = document.getElementById("tableContainer");
tableContainer.appendChild(table);



// Création des données du tableau
const tableData2 = [
	["Ligne 1, Colonne 1", "Ligne 1, Colonne 2", "Ligne 1, Colonne 3", "Ligne 1, Colonne 4", "Ligne 1, Colonne 5", "Ligne 1, Colonne 6"],
	["Ligne 2, Colonne 1", "Ligne 2, Colonne 2", "Ligne 2, Colonne 3", "Ligne 2, Colonne 4", "Ligne 2, Colonne 5", "Ligne 2, Colonne 6"],
	["Ligne 3, Colonne 1", "Ligne 3, Colonne 2", "Ligne 3, Colonne 3", "Ligne 3, Colonne 4", "Ligne 3, Colonne 5", "Ligne 3, Colonne 6"],
	["Ligne 4, Colonne 1", "Ligne 4, Colonne 2", "Ligne 4, Colonne 3", "Ligne 4, Colonne 4", "Ligne 4, Colonne 5", "Ligne 4, Colonne 6"]
  ];
  
  // Création du tableau HTML
  const table2 = document.createElement("table2");
  
  // Parcours des données et création des lignes du tableau
  for (let k = 0; k < tableData2.length; k++) {
	const rowData2 = tableData2[k];
	const row2 = document.createElement("tr");
  
	// Parcours des colonnes de chaque ligne
	for (let l = 0; l < rowData2.length; l++) {
	  const cellData2 = rowData2[l];
	  const cell2 = document.createElement("td");
	  cell2.textContent = cellData2;
	  row2.appendChild(cell2);
	}
  
	table2.appendChild(row2);
  }
  
  // Ajout du tableau au conteneur dans la page HTML
  const tableContainer2 = document.getElementById("tableContainer2");
  tableContainer2.appendChild(table2);

