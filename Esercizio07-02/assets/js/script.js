// Definire tre variabili, rispettivamente con var, let e const, per stampare la stringa di seguito:
var nome = "Aldo";
let stato = "cliente";
const numero = "3.14";

document.getElementById("concatena").innerHTML = nome + ','+ stato +','+  numero;


// Concatenare le variabili precedenti per ottenere lo stesso risultato con un'unica variabile:
let concatenata = nome + "," + stato + "," + numero;

document.getElementById("concatena2").innerHTML = concatenata;


// Utilizzare le keyword dichiarative var e let con la stessa variabile, per ottenere i seguenti risultati:
var x = "Mario";

document.getElementById("var").innerHTML = x;
document.getElementById("final").innerHTML = x;
document.getElementById("let2").innerHTML = x;
{
let y = "Carla";

document.getElementById("let").innerHTML = y;
document.getElementById("let3").innerHTML = y;

document.getElementById("final2").innerHTML = y;
}

// Manipolare il valore di partenza per ottenere i seguenti risultati:
let valoreIniziale = 15;

document.getElementById("iniziale").innerHTML = "Valore iniziale: " + valoreIniziale;

valore = valoreIniziale + 15;
valore2 = valore++;

document.getElementById("valore1").innerHTML = "Addizione e incremento: " + valore+ "," + valore2;

valore3 = valoreIniziale - 10;
valore4 = valore3--;

document.getElementById("valore2").innerHTML = "Sottrazione e decremento: " + valore3 + "," + valore4;

valore5 = valoreIniziale * 3;

document.getElementById("valore3").innerHTML = "Moltiplicazione: " + valore5;

valore6 = valoreIniziale / 3;

document.getElementById("valore4").innerHTML = "Divisione: " + valore6;

valore7 = valoreIniziale + " e'\ un numero";

document.getElementById("valore5").innerHTML = "Concatenazione: " + valore7;

