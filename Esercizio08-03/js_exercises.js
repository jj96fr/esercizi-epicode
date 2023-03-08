/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
var myself = "Federico";




/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla']
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
};

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
pets.push('parrot'); 
console.log(pets); 
/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/

pets.pop(); 

console.log(pets); 
/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstPet = pets.shift(); 
pets.push(firstPet); 
console.log(pets); 
/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    if (pet.charAt(0) === 'c') {
    console.log(true);
    } else {
    console.log(false);
    }
    }
/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];
for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = 'FR135JJ';
    }
    
    console.log(cars); 

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/
function addCar(newCar) {
    cars.push(newCar);
    return cars.length;
    }
const newCar = {
    brand: 'Fiat',
    model: '500',
    color: 'white',
    trims: ['lounge', 'sport'],
    licensePlate: 'XY456ZW',
    };
    
    const newLength = addCar(newCar);
    
    console.log(cars); 
    console.log(newLength); 
/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
// inserisci la tua funzione qui
let justFirstTrims = [];

function saveFirstTrim() {
for (let i = 0; i < cars.length; i++) {
const firstTrim = cars[i].trims[0];
justFirstTrims.push(firstTrim);
}
}

saveFirstTrim();

console.log(justFirstTrims);


/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
    const carColor = cars[i].color;
    if (carColor.length <= 4) {
    console.log("Fizz");
    } else {
    console.log("Buzz");
    }
    }
/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/
const carsWithMoreThan2Trims = cars.filter(function(car) {
    return car.trims.length > 2;
    });
    
    console.log(carsWithMoreThan2Trims);
/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/
const carModels = cars.map(function(car) {
    return car.brand + " " + car.model;
    });
    
    console.log(carModels);
/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;

while (numericArray[i] !== 32) {
console.log(numericArray[i]);
i++;
}
/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const positionsArray = [];

for (let i = 0; i < charactersArray.length; i++) {
const char = charactersArray[i];
switch (char) {
case 'a':
positionsArray.push(1);
break;
case 'b':
positionsArray.push(2);
break;
case 'c':
positionsArray.push(3);
break;
case 'd':
positionsArray.push(4);
break;
case 'e':
positionsArray.push(5);
break;
case 'f':
positionsArray.push(6);
break;
case 'g':
positionsArray.push(7);
break;
case 'h':
positionsArray.push(8);
break;
case 'i':
positionsArray.push(9);
break;
case 'j':
positionsArray.push(10);
break;
case 'k':
positionsArray.push(11);
break;
case 'l':
positionsArray.push(12);
break;
case 'm':
positionsArray.push(13);
break;
case 'n':
positionsArray.push(14);
break;
case 'o':
positionsArray.push(15);
break;
case 'p':
positionsArray.push(16);
break;
case 'q':
positionsArray.push(17);
break;
case 'r':
positionsArray.push(18);
break;
case 's':
positionsArray.push(19);
break;
case 't':
positionsArray.push(20);
break;
case 'u':
positionsArray.push(21);
break;
case 'v':
positionsArray.push(22);
break;
case 'w':
positionsArray.push(23);
break;
case 'x':
positionsArray.push(24);
break;
case 'y':
positionsArray.push(25);
break;
case 'z':
positionsArray.push(26);
break;
default:
positionsArray.push(null);
break;
}
}

console.log(positionsArray);