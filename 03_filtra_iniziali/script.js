/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nameWithA() {
  for (let i = 0; i < names.length; i++) {
    const letter = names[i].charAt(0);
    if (letter === "A") {

    }
  }
}

// Invoca la funzione qui e stampa il risultato in console

nameWithA()

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]