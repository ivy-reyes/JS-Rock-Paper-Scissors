// array
let rps_img = ["assets/images/rock-lee.png", "assets/images/pauper.png", "assets/images/ceaser.png"];


// variables
const player_choice_disp = document.getElementById("playerChoice");
const computer_choice_disp = document.getElementById("computerChoice");
let result = document.getElementById("result");
let characterChoice = "";
let characterChoiceBot = "";
let setWon = 0;
let setLose = 0;

// button
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorBtn = document.querySelector("#scissorBtn");

// event
rockBtn.addEventListener("click", rockFunc);
paperBtn.addEventListener("click", paperFunc);
scissorBtn.addEventListener("click", scissorFunc);

// assumption
// 0 -> rock
// 1 -> pauper
// 2 -> ceasar

function rockFunc() {
    let player = 0;
    let bot = botSelect();

    game(player, bot);

}

function paperFunc() {
    let player = 1;
    let bot = botSelect();

    game(player, bot);
}

function scissorFunc() {
    let player = 2;
    let bot = botSelect();

    game(player, bot);
}

function botSelect() {
    let i = Math.floor(Math.random() * 3);
    return i;
}

function game(player, bot) {
    player_choice_disp.style.backgroundImage = "url(" + rps_img[player] + ")";
    computer_choice_disp.style.backgroundImage = "url(" + rps_img[bot] + ")";

    result.style.display = "none";

    switch (player) {
        case 0:
            characterChoice = "Rock Lee";
            break;
        case 1:
            characterChoice = "Pauper";
            break;
        case 2:
            characterChoice = "Ceasar";
            break;
        default:
            console.log("err")
    }

    switch (bot) {
        case 0:
            characterChoiceBot = "Rock Lee";
            break;
        case 1:
            characterChoiceBot = "Pauper";
            break;
        case 2:
            characterChoiceBot = "Ceasar";
            break;
        default:
            console.log("err")
    }




    if (player == bot) {
        result.style.display = "block";
        result.innerHTML = "It's a tie!";
        resultIndicator = "You both gets " + characterChoice + ". Draw";
    }
    // if rock lee
    else if (player == 0 && bot == 2) {
        result.style.display = "block";
        result.innerHTML = "YOU WIN!";
        winRound();
        resultIndicator = characterChoice + " Defeats " + characterChoiceBot + ". You win!";
    } else if (player == 0 && bot == 1) {
        result.style.display = "block";
        result.innerHTML = "YOU LOSE!";
        losesRound();
        resultIndicator = characterChoice + " beaten by " + characterChoiceBot + ". You lose!";
    }
    // else if pauper
    else if (player == 1 && bot == 0) {
        result.style.display = "block";
        result.innerHTML = "YOU WIN!";
        winRound();
        resultIndicator = characterChoice + " Defeats " + characterChoiceBot + ". You win!";
    } else if (player == 1 && bot == 2) {
        result.style.display = "block";
        result.innerHTML = "YOU LOSE!";
        losesRound();
        resultIndicator = characterChoice + " beaten by " + characterChoiceBot + ". You lose!";
    }
    // else if ceasar
    else if (player == 2 && bot == 1) {
        result.style.display = "block";
        result.innerHTML = "YOU WIN!";
        winRound();
        resultIndicator = characterChoice + " Defeats " + characterChoiceBot + ". You win!";
    } else if (player == 2 && bot == 0) {
        result.style.display = "block";
        result.innerHTML = "YOU LOSE!";
        losesRound();
        resultIndicator = characterChoice + " beaten by " + characterChoiceBot + ". You lose!";
    }

    else {
        alert("system error!!!!");
    }

    // Match History
    let firstItem = document.createElement('li');
    firstItem.textContent = resultIndicator;
    firstItem.style.fontSize = "20px";
    let addedMatch = matchList.insertBefore(firstItem, matchList.firstElementChild);
    addedMatch.style.listStyleType = "none";

    if (setWon > 0) {
        let setItem = document.createElement('li');
        setItem.textContent = "You won the set.";
        setItem.style.fontSize = "20px";
        let addedSet = matchList.insertBefore(setItem, matchList.firstElementChild);
        addedSet.style.listStyleType = "none";
        addedSet.style.color = "green";
        setWon = 0;
    }
    if (setLose > 0) {
        let setItem = document.createElement('li');
        setItem.textContent = "You lose the set.";
        setItem.style.fontSize = "20px";
        let addedSet = matchList.insertBefore(setItem, matchList.firstElementChild);
        addedSet.style.listStyleType = "none";
        addedSet.style.color = "red";
        setLose = 0;
    }


}

function winRound() {
    wonRound = wonRound + 1;

    if (wonRound > 3) {
        wonRound = 0;
        document.getElementById("winStar1").style.color = "black";
        document.getElementById("winStar2").style.color = "black";
        document.getElementById("winStar3").style.color = "black";
        loseRound = 0;
        alert("CONGRATULATIONS! 🎉 You won the set. ");
        document.getElementById("loseStar1").style.color = "black";
        document.getElementById("loseStar2").style.color = "black";
        document.getElementById("loseStar3").style.color = "black";
        let set = document.querySelector(".win");
        wonSet = wonSet + 1;
        set.textContent = wonSet;
        setWon = 1;
        return;

    }

    let starWinId = "winStar" + wonRound;
    document.getElementById(starWinId).style.color = "yellow";
}

let wonRound = 0;
let wonSet = 0;

function losesRound() {
    loseRound = loseRound + 1;

    if (loseRound > 3) {
        loseRound = 0;
        document.getElementById("loseStar1").style.color = "black";
        document.getElementById("loseStar2").style.color = "black";
        document.getElementById("loseStar3").style.color = "black";
        wonRound = 0;
        alert("TRY AGAIN, 🥲 You lose the set.");
        document.getElementById("winStar1").style.color = "black";
        document.getElementById("winStar2").style.color = "black";
        document.getElementById("winStar3").style.color = "black";
        let set = document.querySelector(".lose");
        loseSet = loseSet + 1;
        set.textContent = loseSet;
        setLose = 1;
        return;
    }

    let starLoseId = "loseStar" + loseRound;
    document.getElementById(starLoseId).style.color = "yellow";
}

let loseRound = 0;
let loseSet = 0;

// elements
let matchList = document.querySelector("#matchList");
let defaultItem = document.querySelector("#defaultItem");

let resultIndicator = "";
