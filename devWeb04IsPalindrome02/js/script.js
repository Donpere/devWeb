
function isPalindrome(str){
  const letters = str.split('');
  console.log("letters : "+letters);
  letters.reverse();
  const revWord = letters.join('');
  console.log("revWord : "+revWord);
  
return str === revWord;
}

// Fonction pour vérifier si un mot est un palindrome
function checkPalindrome(event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  
  // Récupère la valeur du champ de saisie
  let word = document.getElementById("wordInput").value;
  console.log(word);

  // Met en minuscules pour ignorer la casse
  word = word.toLowerCase();

// Vérifie si le mot ne contient que des lettres (sans espaces ni caractères spéciaux)
  let lettersOnly = /^[a-zA-Z]+$/;
  if (!lettersOnly.test(word)) {
    let resultDiv = document.getElementById("result");
    resultDiv.textContent = `Erreur : "${word}" contient un caractère non autorisé. Le mot ne doit contenir que des lettres.`;
    return;
  }

  // EXPLOIT DE LA FONCTION SUR LES DONNEES
///////////////////////////////////////////////////////////////////////////////

console.log(isPalindrome(word));

// Affiche le résultat dans la div "result"
let resultPal = document.getElementById("result");
if (!isPalindrome(word)) {
  resultPal.textContent = `"${word}" n'est pas un palindrome.`;
} else {
  resultPal.textContent = `"${word}" est un palindrome.`;
}
}

// Ajoute un gestionnaire d'événement pour le formulaire
let form = document.getElementById("palindromeForm");
form.addEventListener("submit", checkPalindrome);
