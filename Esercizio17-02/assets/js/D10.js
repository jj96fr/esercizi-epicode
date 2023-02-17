/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
var sum = 10 + 20;

console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
var random = Math.floor(Math.random() * 21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var me = {
  name: "Federico",
  surname: "Reiff",
  age: 26
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = [];
me.skills.push("JS");
me.skills.push("CSS");
me.skills.push("HTML");
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("React");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(whoIsBigger(5, 10));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(str) {
  return str.split(" ");
}
var myString = "I love coding";
var myArray = splitMe(myString);
console.log(myArray);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, deleteFirst) {
  if (deleteFirst) {
    return str.substring(1);
  } else {
    return str.substring(0, str.length - 1);
  }
}
var myString = "esempio";
console.log(deleteOne(myString, true));
console.log(deleteOne(myString, false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(str) {
  return str.replace(/[0-9]/g, '');
}
var myString = "I have 4 dogs";
console.log(onlyLetters(myString));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(str) {
  var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(str);
}
var myString1 = "pippo@pluto.com";
var myString2 = "pippo.com";
console.log(isThisAnEmail(myString1));
console.log(isThisAnEmail(myString2));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  var daysOfWeek = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato'];
  var now = new Date();
  var dayOfWeek = now.getDay();
  return daysOfWeek[dayOfWeek];
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numRolls) {
  var result = {
    sum: 0,
    values: []
  };

  for (var i = 0; i < numRolls; i++) {
    var roll = dice();
    result.sum += roll;
    result.values.push(roll);
  }

  return result;
}
var myRolls = rollTheDices(3);
console.log(myRolls);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  var oneDay = 24 * 60 * 60 * 1000;
  var today = new Date();
  var diffDays = Math.round(Math.abs((date.getTime() - today.getTime()) / oneDay));
  return diffDays;
}
var myDate = new Date('2023-02-10');
console.log(howManyDays(myDate));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
var myBirthYear = 1996;
var myBirthMonth = 5;
var myBirthDay = 13;

function isTodayMyBirthday() {
  var today = new Date();
  var birthDate = new Date(myBirthYear, (myBirthMonth - 1), myBirthDay);
  var birthMonth = birthDate.getMonth();
  var birthDay = birthDate.getDate();

  if (birthMonth === today.getMonth() && birthDay === today.getDate()) {
    return true;
  } else {
    return false;
  }
}
var myBirthday = isTodayMyBirthday();
if (myBirthday) {
  console.log("Buon compleanno!");
  console.log("Non è il tuo compleanno.");
}


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [{
  Title: 'The Lord of the Rings: The Fellowship of the Ring',
  Year: '2001',
  imdbID: 'tt0120737',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
},

{
  Title: 'The Lord of the Rings: The Return of the King',
  Year: '2003',
  imdbID: 'tt0167260',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
},
{
  Title: 'The Lord of the Rings: The Two Towers',
  Year: '2002',
  imdbID: 'tt0167261',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
},
{
  Title: 'Lord of War',
  Year: '2005',
  imdbID: 'tt0399295',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
},
{
  Title: 'Lords of Dogtown',
  Year: '2005',
  imdbID: 'tt0355702',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
},
{
  Title: 'The Lord of the Rings',
  Year: '1978',
  imdbID: 'tt0077869',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
},
{
  Title: 'Lord of the Flies',
  Year: '1990',
  imdbID: 'tt0100054',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
},
{
  Title: 'The Lords of Salem',
  Year: '2012',
  imdbID: 'tt1731697',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
},
{
  Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
  Year: '1984',
  imdbID: 'tt0087365',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
},
{
  Title: 'Lord of the Flies',
  Year: '1963',
  imdbID: 'tt0057261',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
},
{
  Title: 'The Avengers',
  Year: '2012',
  imdbID: 'tt0848228',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
},
{
  Title: 'Avengers: Infinity War',
  Year: '2018',
  imdbID: 'tt4154756',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
},
{
  Title: 'Avengers: Age of Ultron',
  Year: '2015',
  imdbID: 'tt2395427',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
},
{
  Title: 'Avengers: Endgame',
  Year: '2019',
  imdbID: 'tt4154796',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
},
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, prop) {
  delete obj[prop];
  return obj;
}
const person = {
  name: "Alice",
  age: 30,
  city: "Roma"
};

deleteProp(person, "city");

console.log(person);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  let newest = null;
  for (let movie of movies) {
    const year = parseInt(movie.Year);
    if (!isNaN(year) && (newest === null || year > newest.Year)) {
      newest = movie;
    }
  }
  return newest;
}
const newest = newestMovie(movies);
console.log(newest);
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}
const numMovies = countMovies(movies);
console.log(numMovies);
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  const years = [];

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    years.push(movie.Year);
  }

  return years;
}
const years = onlyTheYears(movies);
console.log(years);
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  const lastMillennium = [];

  for (let i = 0; i < movies.length; i++) {
    const year = parseInt(movies[i].Year);
    if (year >= 2000) {

      continue;
    }


    lastMillennium.push(movies[i]);
  }

  return lastMillennium;
}
const lastMillenniumMovies = onlyInLastMillennium(movies);
console.log(lastMillenniumMovies);
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year);
  }
  return sum;
}
const totalYears = sumAllTheYears(movies);
console.log(totalYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(movies, title) {
  const matchingMovies = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(title.toLowerCase())) {
      matchingMovies.push(movies[i]);
    }
  }

  return matchingMovies;
}
const matchingMovies = searchByTitle(movies, 'Lord of the Rings');
console.log(matchingMovies);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(movies, searchString) {
  const match = [];
  const unmatch = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(searchString.toLowerCase())) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }

  const result = {
    match: match,
    unmatch: unmatch
  };

  return result;
}
const result = searchAndDivide(movies, 'Lord of the Rings');
console.log(result.match);
console.log(result.unmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(movies, index) {
  const result = [...movies.slice(0, index), ...movies.slice(index + 1)];
  return result;
}
const moviesWithoutThird = removeIndex(movies, 2);
console.log(moviesWithoutThird);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainer() {
  const container = document.getElementById("container");
  console.log(container);
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAllTD() {
  const tds = document.querySelectorAll("td");
  console.log(tds);

}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTDText() {
  const tds = document.querySelectorAll("td");
  for (let i = 0; i < tds.length; i++) {
    console.log(tds[i].textContent);
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedLinks() {
  const links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addListItem() {
  const myList = document.getElementById("myList");
  const newLi = document.createElement("li");
  const newLiText = document.createTextNode("Nuovo elemento della lista");
  newLi.appendChild(newLiText);
  myList.appendChild(newLi);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function clearList() {
  const myList = document.querySelector("#myList");
  myList.innerHTML = "";
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToTR() {
  const trs = document.querySelectorAll("tr");
  for (let i = 0; i < trs.length; i++) {
    trs[i].classList.add("test");
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(height) {

  if (height <= 0) {
    console.log("L'altezza deve essere maggiore di 0.");
    return;
  }


  for (let row = 1; row <= height; row++) {
    let stars = '';
    for (let i = 1; i <= row; i++) {
      stars += '*';
    }
    console.log(stars);
  }
}
halfTree(5);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(height) {
  // controlla se l'altezza è valida
  if (height <= 0) {
    console.log("L'altezza deve essere maggiore di 0.");
    return;
  }

  // costruisce l'albero
  for (let row = 1; row <= height; row++) {
    let stars = '';
    let spaces = '';

    // aggiunge gli spazi vuoti prima dell'asterisco
    for (let i = 1; i <= height - row; i++) {
      spaces += ' ';
    }

    // aggiunge gli asterischi della riga
    for (let i = 1; i <= 2 * row - 1; i++) {
      stars += '*';
    }

    console.log(spaces + stars);
  }
}
tree(5);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num) {

  if (num <= 1) {
    return false;
  }


  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isItPrime(23));
console.log(isItPrime(24)); 
