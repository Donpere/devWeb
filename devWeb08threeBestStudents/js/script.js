const students = [
	{
		name: 'John',
		notes:[1, 20, 18, 19, 12]
	},
	{
		name: 'Jane',
		notes:[17, 18, 20, 13, 15]
	},
	{
		name: 'Sophie',
		notes:[17, 12, 14, 15, 13]
	},
	{
		name: 'Marc',
		notes:[2, 3, 5, 8, 9]
	},
	{
		name: 'Manon',
		notes:[18, 17, 18, 19, 12]
	},
]

const moyenne = (notes) => {
	let sum = 0;
	for (let grade of notes){
		sum = sum + grade
	}
	return sum / notes.length
}

// boucle pour envoyer la moyenne sur la console

// for(let person of students){
// 	person.moyenne = moyenne(person.notes);
// 	console.log(`${person.name}: ${person.moyenne}`);
// }

///////////////////////////////////////////////////////////////////////////

// boucle pour envoyer les moyennes sur la page html

// Dans votre page HTML, vous devez avoir un élément <ul> avec l'ID "moyennes-list" 
// pour afficher la liste des moyennes. 
// Cet élément sera utilisé pour ajouter les éléments <li> contenant les moyennes des étudiants.

// En JavaScript, nous récupérons l'élément <ul> en utilisant document.getElementById("moyennes-list") 
// et le stockons dans la variable moyennesListElement.

// Ensuite, nous itérons à travers chaque objet person dans le tableau students. 
// Nous calculons la moyenne des notes de chaque personne en utilisant la fonction moyenne() 
// et l'attribuons à la propriété moyenne de l'objet person.

// À l'intérieur de la boucle, nous créons un nouvel élément <li> en utilisant document.createElement("li"). 
// Ensuite, nous mettons à jour le contenu de cet élément avec la chaîne ${person.name}: ${person.moyenne} en utilisant la propriété textContent.

// Enfin, nous ajoutons chaque élément <li> contenant les moyennes à l'élément <ul> 
// en utilisant moyennesListElement.appendChild(listItem).

// Ainsi, les moyennes des étudiants seront ajoutées en tant qu'éléments de liste dans l'élément <ul> de votre page HTML.

// Assurez-vous de placer ce code JavaScript à un endroit approprié dans votre page HTML, 
// tel qu'une balise <script> à l'intérieur de la section <body> ou dans un fichier JavaScript externe lié à votre page HTML.

const moyennesListElement = document.getElementById("moyennes-list");

for (let person of students) {
  person.moyenne = moyenne(person.notes);
  const listItem = document.createElement("li");
  listItem.textContent = `${person.name}: ${person.moyenne}`;
  moyennesListElement.appendChild(listItem);
}



