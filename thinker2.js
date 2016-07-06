//TEST START
  console.log("Linked 2! yay");
//TEST END

// declare global variables
var boxes = document.getElementsByClassName("box");
var turn = "x";
var circle = "images/circle.png";
var cross = "images/cross.png";
var img = "";
var combo = [];
var state = "cross";

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

//winning condition- if else
//
// var win = function () {
//   if (state == box1 == box2 && box2 == box3){
//     alert();
//   }
//   else if (state == box4 == box5 && box5 == box6){
//     alert();
//   }
//   else if (state == box7 == box8 && box8 == box9){
//     alert();
//   }
//   else if (state == box1 == box4 && box4 == box7){
//     alert();
//   }
//   else if (state == box2 == box5 && box5 == box8){
//     alert();
//   }
//   else if (state == box3 == box6 && box6 == box9){
//     alert();
//   }
//   else if (state == box1 == box5 && box5 == box9){
//     alert();
//   }
//   else if (state == box3 == box5 && box5 == box7) {
//     alert();
//   }
// };


//Start Game
// function startGame(){
//   turn = "x";
//   console.log("its X's turn");
// }

// switch turn
//if its turn x, make it turn o
//if its not turn x, make it turn x!

function switchTurn() {
  if (turn == "x") {
    turn = "o";
  }
  else {
    turn = "x";
  }
  console.log("turn belongs to " + turn);
}

function switchImg(){
  if (turn == "x") {
    img = "images/cross.png";
  }
  else {
    img = "images/circle.png";
  }
}

function switchState() {
  if (turn == "x") {
    state = "cross";
  } else {
    state = "circle";
  }
}

function checkState() {
  for (var i = 0; i < boxes.length; i++) {
    console.log(boxes[i].id + ":" + boxes[i].state);
  }
}

//winning combination
//
// var winnerIs = function (){
//   for (var i = 0; i<winCombo.length; i++){
//     if (comboY.toString() == winCombo[i].toString()) {
//       console.log("win");
//       alert("win");
//     }
//   }
// };

// //effect when clicked
// variable onClick=
// - create img tag
// - set attribute
//   - src =
// // // - if turn x, place cross.png, else, place circle.png
//   - class = .cross

var onClick = function (){
    if (this.innerHTML.length === 0){
      switchImg();
      var newImg = document.createElement("img");
      newImg.setAttribute("src", img);
      newImg.setAttribute("class", "cross");
      this.appendChild(newImg);
      this.state = state;
      switchTurn();
      switchState();
      console.log(this.state);
    } else {}
    win();
};

// addeventlistener to boxes!
for (var i = 0; i < boxes.length; i++){
  boxes[i].addEventListener("click", onClick);
  boxes[i].addEventListener("click", checkState);
}


// add reset function!
var resetButton= document.getElementById("resetButton");
// var resetButton= ;
function reset(){
  for (var i = 0; i < boxes.length; i++){
    boxes[i].innerHTML = "";
  }
  comboX=[];
  comboY=[];
}
resetButton.addEventListener("click", reset);

/////////////
