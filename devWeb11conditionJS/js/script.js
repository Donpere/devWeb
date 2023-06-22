document.getElementById('ageForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Empêche le rechargement de la page

	const age = parseInt(document.getElementById('ageInput').value);
	if(age >= 18){
	document.getElementById('resultJS').innerHTML = "Vous etes majeur, felicitations !" ;
}
else{
	document.getElementById('resultJS').innerHTML = "Desole, revenez dans quelques annees" ;
}
showConfirmation();
  });

  function showConfirmation() {
	// Afficher le message de confirmation initial
	document.getElementById('confirmJS').innerHTML = "Le formulaire a été soumis avec succès !";

	// Changer le message de confirmation après 7 secondes
	setTimeout(function() {
	  document.getElementById('confirmJS').innerHTML = "En attente de votre âge";
	}, 4000); // 4000 millisecondes = 4 secondes
  }