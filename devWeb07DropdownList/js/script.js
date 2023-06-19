function calculate() {
	// Récupère les valeurs des opérandes et de l'opérateur
	const operand1 = Number(document.getElementById("operand1").value);
	const operand2 = Number(document.getElementById("operand2").value);
	const operator = document.getElementById("operator").value;

	// Effectue le calcul en fonction de l'opérateur choisi
	let result;
	switch (operator) {
	  case "+":
		result = operand1 + operand2;
		break;
	  case "-":
		result = operand1 - operand2;
		break;
	  case "*":
		result = operand1 * operand2;
		break;
	  case "/":
		result = operand1 / operand2;
		break;
	  default:
		result = "Opérateur invalide";
	}

	// Affiche le résultat
	document.getElementById("result").textContent = result;
  }