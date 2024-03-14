// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

//Creare funzione con 1 parola in ingresso:
//SE la variabile parola invertita è uguale alla parola inserita dall'utente, allora ritorna true
//ALTRIMENTI ritorna false

function isPalindrome(word) {
  let invertedWord = "";

  for (let i = userWord.length - 1; i >= 0; i--) {
    //con ciclo for, passare ogni lettera della parola partendo dalla fine (length-1) e arrivando all'inizio (indice è >=0). Ciclo deve essere inverso, quindi i--.
    let letter = userWord[i]; //creare variabile in cui concateno ogni lettera durante il ciclo, creando la parola invertita
    invertedWord += letter;
  }

  if (word === invertedWord) {
    return true;
  } else {
    return false;
  }
}

let userWord = prompt("Inserisci una parola");

console.log(isPalindrome(userWord));
