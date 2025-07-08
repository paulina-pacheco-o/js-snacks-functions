/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
const saluto = () => {
  return `ciao` + userName
}


// Invoca la funzione qui e stampa il risultato in console
saluto()
console.log(`ciao` + userName);



//Risultato atteso se si passa 'Mario': // ciao Mario
