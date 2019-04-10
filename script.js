//Output div
var output = document.getElementById('output');
var result = document.getElementById('result');

//Wynik
var score;
var playerScore = 0;
var computerScore = 0;

//Btn's
var papierBtn = document.getElementById('papier');
var kamienBtn = document.getElementById('kamien');
var nozyceBtn = document.getElementById('nozyce');


//Functions
/*Get player move
* -zwraca id klikniętego btn'a*/
var getPlayerM = function(event) {
    console.log('getPlayerM - event.target.id')
    console.log(event.target.id)
    return event.target.id;
}

/*Get computer move
* zwraca randomową całkowitą liczbę <1;3>
* mapuje cyfrę na stringa
* zwraca stringa*/
var getComputerM = function() {
    var computerM = Math.floor((Math.random() * 3) + 1);
    //Przemapowanie zmiennej computerM na stringa
    if (computerM === 1) {
        computerM = 'papier';
    } else if (computerM === 2) {
        computerM = 'kamien';
    } else {
        return computerM = 'nozyce';
    }
    console.log('getComputerM - computerM')
    console.log(computerM);
    return computerM;
}

/*Print Round Output
* W divie o klasie "output" printuje msg o wyniku rundy w zależności od rezultatu*/
var printRoundOutput = function(score, playerM, computerM) {
    if (score === 'wygrana gracza') {
        output.innerHTML += 'YOU WON: you played ' + playerM + ', computer played ' + computerM + '<br><br>'
    } else if (score === 'wygrana komputera') {
        output.innerHTML += 'COMPUTER WON: it played ' + computerM + ', YOU played ' + playerM + '<br><br>'
    } else if (score === 'remis') {
        output.innerHTML += 'REMIS: it played ' + computerM + ', YOU played ' + playerM + '<br><br>'
    }
    console.log(output)
}

var updateScore = function(score) {
    if (score === 'wygrana gracza') {
        playerScore += 1;
    } else if (score === 'wygrana komputera') {
        computerScore += 1;
    }
}

var printScore = function(playerScore, computerScore) {
    result.innerHTML = 'playerScore ' + playerScore + ' - ' + computerScore + ' computerScore';
}

var playerMove = function(event) {
    console.log('playerMove - event')
    console.log(event)
    console.log('playerMove - event.target')
    console.log(event.target)
    console.log('playerMove - event.target.id')
    console.log(event.target.id)
    console.log('playerMove - event.type')
    console.log(event.type)
    var playerM = getPlayerM(event);
    var computerM = getComputerM();
    if (computerM ===  playerM) {
        score = 'remis';
    } else if (computerM === 'papier' && playerM === 'kamien'){
        score = 'wygrana komputera';
    } else if (computerM === 'papier' && playerM === 'nozyce') {
        score = 'wygrana gracza';
    } else if (computerM === 'kamien' && playerM === 'papier') {
        score = 'wygrana gracza';
    } else if (computerM === 'kamien' && playerM === 'nozyce') {
        score = 'wygrana komputera';
    } else if (computerM === 'nozyce' && playerM === 'papier') {
        score = 'wygrana komputera';
    } else if (computerM === 'nozyce' && playerM === 'kamien'){
        score = 'wygrana gracza';
    }
    console.log('playerMove - score')
    console.log(score)
    printRoundOutput(score, playerM, computerM);
    updateScore(score);
    printScore(playerScore, computerScore);
}

papierBtn.addEventListener('click', playerMove);
kamienBtn.addEventListener('click', playerMove);
nozyceBtn.addEventListener('click', playerMove);




