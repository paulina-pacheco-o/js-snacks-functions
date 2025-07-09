/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function letters() {
  for (let i = 0; i < names.length; i++) {
    const letter = names[i].charAt(0);
    const newArray = letter.join(",");
    console.log(newArray);
  }

  //const firstLetters = newArray
}


// Invoca la funzione qui e stampa il risultato in console
letters()
//console.log(firstLetters);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]