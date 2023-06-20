<?php
	  $nom = $_POST['recTxt'];
	  $file = fopen('rec.txt', 'a');
	  fwrite($file, $nom . PHP_EOL);
	  fclose($file);
	  header('Location: index.html');
	exit();
	  ?>