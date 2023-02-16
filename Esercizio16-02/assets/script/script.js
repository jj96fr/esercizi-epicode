/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
      */
       const changeTitle = function (newTitle) {
        document.title = newTitle;
    }
    
    var newTitle = 'Titolo del documento';
    changeTitle(newTitle);
    
    /* ESERCIZIO 2
     Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
    */
    
    const addClassToTitle = function () {
        // const title = document.querySelector('h1');
        // title.classList.add('myHeading');
        var classe = document.querySelector('h1');
        classe.className = 'myHeading';
        //
    };
    addClassToTitle();
    
    /* ESERCIZIO 3
     Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
    */
    
    const changePcontent = function () {
        var paragrafi = document.querySelectorAll('div > p');
        var contenuto = 'pollo alle mandorle';
        for (let i = 0; i < paragrafi.length; i++) {
            paragrafi[i].textContent = contenuto;
        }
        //
    };
    changePcontent();
    
    /* ESERCIZIO 4
     Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
    */
    
    const changeUrls = function () {
        var links = document.querySelectorAll('a');
        var contenuto = 'https://www.google.com';
        for (let i = 0; i < links.length; i++) {
            links[i].href = contenuto;
        }
        //
    }
    changeUrls();
    
    /* ESERCIZIO 5
     Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
    */
    
    const addToTheSecond = function () {
        var node = document.createElement('li');
        node.appendChild(document.createTextNode('Quarto'));
        document.getElementById('secondList').appendChild(node);
        //
    };
    addToTheSecond();
    /* ESERCIZIO 6
     Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
    */
    
    const addParagraph = function () {
        let nodo = document.createElement('p');
        nodo.appendChild(document.createTextNode('Secondo paragrafo del primo div'));
        document.querySelector('div').appendChild(nodo);
        //
    }
    addParagraph();
    
    /* ESERCIZIO 7
     Scrivi una funzione per far scomparire la prima lista non-ordinata.
    */
    
    const firstUlDisappear = function () {
        document.getElementById('firstList').style.visibility = 'hidden';
        //
    }
    
    firstUlDisappear();
    /* ESERCIZIO 8
     Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
    */
    
    const paintItGreen = function () {
        var ul = document.querySelectorAll("ul");
        for (let i = 0; i < ul.length; i++) {
            ul[i].style.backgroundColor = 'green';
        }
        //
    }
    paintItGreen();
    /* ESERCIZIO 9
     Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
    */
    
    const makeItClickable = function () {
    
        const titolo = document.querySelector("h1");
        titolo.addEventListener("click", function () {
            const nuovoColore = generaColoreCasuale();
            titolo.style.color = nuovoColore;
        });
    
        function generaColoreCasuale() {
            const colore = Math.floor(Math.random() * 16777215).toString(16);
            return "#" + colore;
        }
        //
    }
    makeItClickable();
    /* ESERCIZIO 10
     Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
    */
    
    const changeFooterText = function () {
    
        const footer = document.querySelector(".footer");
        footer.addEventListener("click", function () {
            footer.innerHTML = 'Il contenuto del footer e\' cambiato';
        });
    };
    changeFooterText();
    /* ESERCIZIO 11
     Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
    */
    
    const inputField = document.getElementById('input-field');
    
    inputField.addEventListener('input', function (event) {
        console.log(event.target.value)});
        /* ESERCIZIO 12
         Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.
        */
        var nomeUtente = 'Federico';
          window.onload = function () {
            alert('Benvenuto ' + nomeUtente)//
         };