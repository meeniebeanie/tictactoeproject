// declare global variables
var turnCounter = 1; //counts which turn game is currently on; even number for circle and odd number for cross
var boxes = document.getElementsByClassName("box"); //create an array 'boxes' that contains all dom elements with the class 'box'
var resetButton = document.getElementById("resetButton"); //binds 'resetButton' to reset button at bottom
var hovered = false; //state variable used to keep track of image in box hover state
var inPlay = true; //when 'inPlay' is true, game can be played (i.e. boxes respond to click)
var winner = ""; //empty variable to assign game winner
var winCondition = ""; //empty string to assign condition of win (horizontal, vertical, diagonal) to highlight boxes that win

//this function determines what happens when a boxes is hovered but not clicked (showing a transparent version of cross/circle)
var whenHover = function(){
  if (hovered == false && inPlay==true) { //if an element is not already being hovered over - prevents multiple instances of code being run
    if (this.state == undefined) { //if state is not "cross" or "circle" - i.e. empty box
      var createImg = document.createElement("img");
      if (turnCounter%2==1) { //X if even, O if odd
        createImg.setAttribute("src","images/x.png");
        createImg.setAttribute("class","cross faded"); //'faded' class sets opacity of image to 0.5
        this.appendChild(createImg);
      } else {
        createImg.setAttribute("src","images/o.png");
        createImg.setAttribute("class","circle faded"); //'faded' class sets opacity of image to 0.5
        this.appendChild(createImg);
      }
    }
    hovered = true; 
  } else {}
};

//this function executes when mouse leaves the box, undoing hover preview
var clearFaded = function() {
  if (hovered == true) {
    if (this.state==undefined) {    //if box has not been filled
      this.innerHTML=""; //clear preview of image
    }
  }
  hovered = false; //hover state is false
}


//these functions execute when box is clicked, updating turn number and indicating it in the html
var onTurn = function() { //on box click (change turn), update h2 to show turn number and whose turn it is
  if (inPlay==true) {
    turnCounter++; 
    document.getElementById("subtitle").innerHTML = "This is turn " + turnCounter +"!"; 
    if (turnCounter%2==0) {
      document.getElementById("subtitle").innerHTML += " Circle goes!"
    } else {
      document.getElementById("subtitle").innerHTML += " Cross goes!"
    }
  }
};

var confirm = function() { //on box click
  if (inPlay==true) {
    this.innerHTML=""; //clear hover preview
    var createImg = document.createElement("img"); //add image to box
      if (turnCounter%2==0) {
        createImg.setAttribute("src","images/x.png");
        createImg.setAttribute("class","cross");
        this.appendChild(createImg);
        this.state = "cross"; //assign state "cross" to box
    } else {
        createImg.setAttribute("src","images/o.png");
        createImg.setAttribute("class","circle");
        this.appendChild(createImg);
        this.state = "circle"; //assign state "circle" to box
    }
    stateCheck(); //check if anybody has won
  }

}

//these functions check for the 8 possible win scenarios - 3 horizonal rows, 3 vertical columns and 2 diagonals. 
//3 conditions are checked - if one of the boxes doesn't hold an 'undefined' state, and if the other two boxes in that win scenario match that state.
//assigns a string to the winCondtion variable to pass on in the gameWin function, tracking which win scenario was reached
var horizontalCheck  = function() {
  if (boxes[0].state !== undefined && boxes[0].state == boxes[1].state && boxes[0].state == boxes[2].state) {
    winner = boxes[0].state;
    console.log("row 1 win by " + winner);
    winCondition = "row1";
    gameWin();
  }
  if (boxes[3].state !== undefined && boxes[3].state == boxes[4].state && boxes[3].state == boxes[5].state) {
    winner = boxes[3].state;
    console.log("row 2 win by " + winner);
    winCondition = "row2";
    gameWin();
  }
  if (boxes[6].state !== undefined && boxes[6].state == boxes[7].state && boxes[6].state == boxes[8].state) {
    winner = boxes[6].state;
    console.log("row 3 win by " + winner);
    winCondition = "row3";
    gameWin();
  }
}

var verticalCheck  = function() {
  if (boxes[0].state !== undefined && boxes[0].state == boxes[3].state && boxes[0].state == boxes[6].state) {
    winner = boxes[0].state;
    console.log("column 1 win by " + winner);
    winCondition = "column1";
    gameWin();
  }
  if (boxes[1].state !== undefined && boxes[1].state == boxes[4].state && boxes[1].state == boxes[7].state) {
    winner = boxes[1].state;
    console.log("column 2 win by " + winner);
    winCondition = "column2";
    gameWin();
  }
  if (boxes[2].state !== undefined && boxes[2].state == boxes[5].state && boxes[2].state == boxes[8].state) {
    winner = boxes[2].state;
    console.log("column 3 win by " + winner);
    winCondition = "column3";
    gameWin();
  }
}

var diagonalCheck = function() {
  if (boxes[0].state !== undefined && boxes[0].state == boxes[4].state && boxes[0].state == boxes[8].state) {
    winner = boxes[0].state;
    console.log("diagonal 1 win by " + winner);
    winCondition = "diagonal1";
    gameWin();
  }
  if (boxes[2].state !== undefined && boxes[2].state == boxes[4].state && boxes[2].state == boxes[6].state) {
    winner = boxes[2].state;
    console.log("diagonal 2 win by " + winner);
    winCondition = "diagonal2";
    gameWin();
  }
}

//combine all checks into one stateCheck function
var stateCheck = function() {
  horizontalCheck();
  verticalCheck();
  diagonalCheck();
}

//what to do when a player wins - kill game, highlight boxes according to the win scenario indicated in winCondition string
var gameWin = function() {
  inPlay = false;
  if (winCondition == 'row1') {
    boxes[0].setAttribute('style','background-color:#ffaf47');
    boxes[1].setAttribute('style','background-color:#ffaf47');
    boxes[2].setAttribute('style','background-color:#ffaf47');
  } else if (winCondition == 'row2') {
    boxes[3].setAttribute('style','background-color:#ffaf47');
    boxes[4].setAttribute('style','background-color:#ffaf47');
    boxes[5].setAttribute('style','background-color:#ffaf47');
  } else if (winCondition == 'row3') {
    boxes[6].setAttribute('style','background-color:#ffaf47');
    boxes[7].setAttribute('style','background-color:#ffaf47');
    boxes[8].setAttribute('style','background-color:#ffaf47');
  } else if (winCondition == 'column1') {
    boxes[0].setAttribute('style','background-color:#ffaf47');
    boxes[3].setAttribute('style','background-color:#ffaf47');
    boxes[6].setAttribute('style','background-color:#ffaf47');
  } else if (winCondition == 'column2') {
    boxes[1].setAttribute('style','background-color:#ffaf47');
    boxes[4].setAttribute('style','background-color:#ffaf47');
    boxes[7].setAttribute('style','background-color:#ffaf47');
  } else if (winCondition == 'column3') {
    boxes[2].setAttribute('style','background-color:#ffaf47');
    boxes[5].setAttribute('style','background-color:#ffaf47');
    boxes[8].setAttribute('style','background-color:#ffaf47');
  } else if (winCondition == 'diagonal1') {
    boxes[0].setAttribute('style','background-color:#ffaf47');
    boxes[4].setAttribute('style','background-color:#ffaf47');
    boxes[8].setAttribute('style','background-color:#ffaf47');
  } else if (winCondition == 'diagonal2') {
    boxes[2].setAttribute('style','background-color:#ffaf47');
    boxes[4].setAttribute('style','background-color:#ffaf47');
    boxes[6].setAttribute('style','background-color:#ffaf47');
  }
  document.getElementById("subtitle").innerHTML = winner.toUpperCase() + " WINS! Hit RESET to play again!"; //update html to indicate status
  alert(winner.toUpperCase() + " WINS! Hit RESET to play again!"); //create an alert to bother players
}

//this function is used to clear the game and restart it, tied to the restart button
var clearAll = function() {
  inPlay = true; //allow game to be played
  for (var i = boxes.length - 1; i >= 0; i--) { //for all boxes
    boxes[i].innerHTML=""; //clear all html content
    boxes[i].state = undefined; //set state variable to 'undefined'
    boxes[i].setAttribute('style', 'background-color:rgba(255,255,255,0.5)'); //reset background color to default, clearing highlight from win
  }
  turnCounter = 0; //reset turn counter
  onTurn(); //update to turn 1, update html text
}

//attach event listeners to boxes for clicks and hovers
for (var i = 0; i < boxes.length; i++) { 
  boxes[i].addEventListener('mouseover',whenHover); 
  boxes[i].addEventListener('mouseleave',clearFaded);
  boxes[i].addEventListener('click',onTurn);
  boxes[i].addEventListener('click',confirm);
}

//attach event listener to reset button
resetButton.addEventListener('click',clearAll);