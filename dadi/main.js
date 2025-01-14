/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

const min = 1;

const max = 6;

let nc= Math.floor(Math.random() * (max - min + 1)) + min; /* nc = numero computer */

console.log(`Numero Computer ${nc}`)

let nu= Math.floor(Math.random() * (max - min + 1)) + min; /* nu = numero utente */

console.log(`Numero Utente ${nu}`)

if (nc > nu) {

    console.log(`Computer Vince`)
    
} else if (nc < nu){

    console.log(`Utente Vince`)
    
}
else{

    console.log(`Pareggio`)

}