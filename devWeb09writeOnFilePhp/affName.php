<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Liste des noms</title>

	<link rel="stylesheet" href="style.css">
</head>
<body>
	<h1>Liste des noms enregistrés</h1>
	
	<?php
	$file = fopen('rec.txt', 'r');
	if ($file) {
		echo "<ul>";
		while (($line = fgets($file)) !== false) {
			echo "<li>" . htmlspecialchars($line) . "</li>";
		}
		echo "</ul>";
		fclose($file);
	} else {
		echo "Impossible d'ouvrir le fichier.";
	}
	?>
	
	<div class="linkL">
		<a href="index.html">Retour à la page d'accueil</a>
	</div>

<script src="js/script.js"></script>

</body>
</html>
