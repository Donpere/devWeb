// Fonction pour vérifier si un mot est un palindrome
function checkPalindrome(event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

  // Récupère la valeur du champ de saisie
  let word = document.getElementById("wordInput").value;

  // Met en minuscules pour ignorer la casse
  word = word.toLowerCase();

  // Vérifie si le mot ne contient que des lettres (sans espaces ni caractères spéciaux)
  let lettersOnly = /^[a-zA-Z]+$/;
  if (!lettersOnly.test(word)) {
    let resultDiv = document.getElementById("result");
    resultDiv.textContent = `Erreur : "${word}" contient un caractère non autorisé. Le mot ne doit contenir que des lettres.`;
    return;
  } else if (word.includes(" ")) {
    let resultDiv = document.getElementById("result");
    resultDiv.textContent = `Erreur : "${word}" contient un espace. Le mot ne doit pas contenir d'espaces.`;
    return;
  }

  // Vérifie si le mot est un palindrome
  let isPalindrome = true;
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  // Affiche le résultat dans la div "result"
  let resultDiv = document.getElementById("result");
  if (!isPalindrome) {
    resultDiv.textContent = `"${word}" n'est pas un palindrome.`;
  } else {
    resultDiv.textContent = `"${word}" est un palindrome.`;
  }
}

// Ajoute un gestionnaire d'événement pour le formulaire
let form = document.getElementById("palindromeForm");
form.addEventListener("submit", checkPalindrome);
