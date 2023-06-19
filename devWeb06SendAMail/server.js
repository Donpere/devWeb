// avant de coder, on doit choisir un port, ici 3000
// il faut verifier que 3000 soit libre avec la commande : sudo lsof -i :3000



// importe le module fs (File System) de Node.js. 
// fs est un module intégré de Node.js qui permet d'interagir 
// avec le système de fichiers. Il fournit des fonctionnalités pour 
// lire, écrire, modifier et supprimer des fichiers, ainsi que pour manipuler des répertoires.
const fs = require('fs');

// il n'est pas nécessaire de créer deux constantes distinctes pour express 
// si vous avez déjà une constante express qui importe le module.

// La convention habituelle est d'utiliser simplement la constante express 
// pour créer l'instance de l'application Express, comme ceci :
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Ce code envoie une requête POST à l'URL /sendEmail 
// avec une en-tête spécifiant que les données sont au format JSON, 
// et le corps de la requête contient l'adresse e-mail à envoyer.
app.post('/sendEmail', (req, res) => {
  const email = req.body.email;
  
  // Stocker l'adresse e-mail dans un fichier
  fs.appendFile('emails.txt', email + '\n', (err) => {
    if (err) {
      console.error('Erreur lors de l\'enregistrement de l\'e-mail:', err);
      res.status(500).json({ message: 'Une erreur est survenue lors de l\'enregistrement de l\'e-mail.' });
    } else {
      console.log('E-mail enregistré:', email);
      res.json({ message: 'E-mail enregistré avec succès.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
