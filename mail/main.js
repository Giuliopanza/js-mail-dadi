/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
 */
const lista = [
    'Nathan.ciao@.it',
    'Ed.ciao@.it',
    'Fabio.ciao@.it',
    'Phil.ciao@.it',
    'Carlo.ciao@.it',
    'Lewis.ciao@.it',
    'Luca.ciao@.it'
  ];

  let b = false;

  let mail = prompt("Scrivi la tua mail")

  for (let i = 0; i < lista.length; i++) {

    if (mail==lista[i]) {

        b=true;

    }
    
  }

  if (b==true) {

    console.log(`Sei presente nella lista`)
    
  } else {

    console.log(`Non sei presente nella lista`)
    
  }