document.getElementById('emailForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Empêche la soumission du formulaire
	
	let email = document.getElementById('email').value;
	
	// Envoi de l'e-mail au serveur
	fetch('/sendEmail', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({ email: email })
	})
	.then(function(response) {
	  return response.json();
	})
	.then(function(data) {
	  document.getElementById('response').textContent = data.message;
	})
	.catch(function(error) {
	  console.error('Erreur:', error);
	});
  });
  