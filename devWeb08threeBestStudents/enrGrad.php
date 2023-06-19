<?php
$note = $_POST['note'];
$file = fopen('grad.txt', 'a');
fwrite($file, $note . PHP_EOL);
fclose($file);
?>
