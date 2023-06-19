<?php
	  $nom = $_POST['nom'];
	  $file = fopen('stud.txt', 'a');
	  fwrite($file, $nom . PHP_EOL);
	  fclose($file);
	  ?>