//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 2
let y = 3
let result

if (x > y) {
  result = `${x} è più grande di ${y}`
} else{
  result = `${x} è più piccolo di ${y}`
}
console.log(result)


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num = 20

if (num < 5) { 
  console.log("Tiny");
} else if (num < 10 && num >= 5) {  //num >= 5 aggiunto dopo
  console.log("Small");
} else if (num < 15 && num >= 10) { //num >= 10 aggiunto dopo
  console.log("Medium");
} else if (num < 20 && num >= 15) { //num >= 15 aggiunto dopo
  console.log("Large");
} else if (num >= 20) {
  console.log("Huge");
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*//* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <=10; i++) {
  if (i === 3) {
    continue;
  }
  if (i === 8){
    continue;
  }
  console.log(i);
}


/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
for (let v = 0; v <=15; v++) { 
  if (v % 2 === 0) {
    console.log("Pari");
  } else if (v % 2 !== 0) {
    console.log("Dispari");
  }
  console.log(v);
}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let a = 20  //verificato cambiando a mano i valori di a & b
let b = 12

if (a === 8 || b === 8) {
  console.log("Uno dei due numeri interi è uguale a 8");
} else{
  console.log("Uno dei due numeri interi NON è uguale a 8");
}

if (a+b && b+a === 8 || a-b === 8 || b-a === 8) {
  console.log("L'addizione/sottrazione tra i due numeri interi è uguale a 8");
} else {
  console.log("L'addizione/sottrazione tra i due numeri interi NON è uguale a 8");
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = {
  product1: 15, // per provare l'algoritmo, cambiare valore
  product2: 20, // per provare l'algoritmo, cambiare valore
  product3: 30, // per provare l'algoritmo, cambiare valore
}

let shipping = 0;

shoppingCart = shoppingCart.product1 + shoppingCart.product2 + shoppingCart.product3;

let totalShoppingCart = shoppingCart;

if (totalShoppingCart <= 50) {
  shipping = 10;
  totalShoppingCart = shoppingCart + shipping;
} 

console.log(totalShoppingCart); 


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totaleSconto = shoppingCart * 0.2;
let blackFriday = shoppingCart - totaleSconto;

if (blackFriday <= 50) {
  shipping = 10;
  blackFriday = shoppingCart - totaleSconto + shipping;
}
console.log(blackFriday);


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let gender 
let isMale = true;
isMale ? (gender = "male") : (gender = "female");

console.log(isMale);


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0){
    console.log("FizzBuzz");
  }
  if (n % 3 === 0){
    console.log("Fizz");
  }
   else if (n % 5 === 0){
    console.log("Buzz");
  }
  else {
  console.log(n);
  }
}
