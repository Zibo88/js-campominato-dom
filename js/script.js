// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

// prendo il btn creato sul DOM
const myBtn = document.getElementById('my-btn');
// console.log(myBtn)

// da quando il bottone viene cliccato parte il gioco
myBtn.addEventListener('click', gameStart)
    // console.log(myBtn)

   function gameStart(){
    // Raccolta dati

    // Chiedo all'utente che livello di difficioltà vuole scegliere
    let dificultLevel = document.querySelector('#difficulty').value;
    console.log('difficult level = ',dificultLevel)

    let rangeMax;

    if(dificultLevel === 'easy'){
        rangeMax = 100;
        
    } else if(dificultLevel === 'hard'){
        rangeMax = 81;
     
    } else if(dificultLevel === 'crazy'){
        rangeMax = 49;
        
    }

    console.log('range max', rangeMax)

    // while(dificultLevel ){
    //     let errorMessage = alert('nun ce provà')
    //     if(dificultLevel !== 1){
    //         errorMessage
    //     }else if(dificultLevel !== 2){
    //         errorMessage
    //     }else if (dificultLevel !== 3){
    //         errorMessage
    //     } else {
    //         dificultLevel
    //     }
    // }


    // Genero le bombe
    // genero 16 numeri in base al numero di bombe da generare, valore minimo e valore massimo del livello di riferimento (rangeMax)
    // evoco la funzione e salvo in una variabile
    let bombs = 16;
    let theBombs = generateBombs( bombs, 1, rangeMax);
    console.log("numero di bombe in base all'array the bombs", theBombs);

    // tentativi possibili
    let userAttempts = rangeMax - bombs;
    // console.log(userAttempts)
      // definisco quando termina il gioco e se vince o se perde creando un ciclo while
    //creo un array che faccia da contenitore dei numeri dati dall'utente
    let gamePlay = true;

    let arrayUserNumber = [];

    while(gamePlay === true){
        // richiedo il numero all'utente finchè..
        let userNumber = parseInt (prompt('inserisci un numero tra 1 e ' + rangeMax));


        
        // se il numero generato include il numero dell'utente
        if(theBombs.includes(userNumber)){
            // il gioco termina
            gamePlay = false
            alert('Hai perso')

            // altrimenti
        } else {
            // se l'array vuoto non continiene usernumber 
            if(!arrayUserNumber.includes(userNumber)){
                // lo pushamo
                arrayUserNumber.push(userNumber);
                console.log(arrayUserNumber)
            }

            // definiamo la vittoria
            if (arrayUserNumber.length === userAttempts){
                alert('hai vinto')
            }
        }
        console.log(arrayUserNumber) 
    }

    let numberOK = alert('hai indovinato ' + arrayUserNumber.length + ' numeri') 

}

console.log(myBtn)

//---------
    // FUNCTION
    //---------
    // creo una funzione che generai numeri random per le bombe
    function generateBombs (numberOfBombs, numMin, rangeMax){
        // creo un array vuoto dove inserire i numeri che verrnno generati
        let numberGenerateArray = [];
        
        // creo un ciclo while che vada avanti per tutta la lunghezza dell'array che deve essere inferiore al numero di bombe
        while(numberGenerateArray.length < numberOfBombs){
            // evoco la funzione random e la salvo in una variabile
            let randomNumber = getRndInteger(numMin, rangeMax);
            // console.log(randomNumber)
            // pusho solo i numeri che non sono gia presenti nell'array
        if(!numberGenerateArray.includes(randomNumber)){
                numberGenerateArray.push(randomNumber);
        }  

        }  
        console.log(numberGenerateArray)

        return numberGenerateArray  

        // creo una funzione che generi numeri random
        function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
    }

