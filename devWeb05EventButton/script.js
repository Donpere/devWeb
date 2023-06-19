// Fonction pour changer la couleur de fond
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Fonction pour journaliser une action
function logAction(action) {
  const logText = new Date().toLocaleString() + ' - ' + action + '\n';

  // Envoyer une requête POST pour journaliser l'action sur le serveur
  fetch('/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: logText
  })
  .then(response => {
    if (response.ok) {
      console.log('Action journalisée avec succès');
    } else {
      console.log('Échec de la journalisation de l\'action');
    }
  })
  .catch(error => {
    console.log('Erreur lors de la journalisation de l\'action:', error);
  });
}

// Écouteurs d'événements pour les boutons de couleur
document.getElementById('redButton').addEventListener('click', function() {
  changeBackgroundColor('red');
  logAction('Changement de couleur : rouge');
});

document.getElementById('greenButton').addEventListener('click', function() {
  changeBackgroundColor('green');
  logAction('Changement de couleur : vert');
});

document.getElementById('blueButton').addEventListener('click', function() {
  changeBackgroundColor('blue');
  logAction('Changement de couleur : bleu');
});
