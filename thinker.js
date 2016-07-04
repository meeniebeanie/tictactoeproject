console.log("Linked! yay");

var cross= url(" ");
var hover= url(" ");

var turn=[];

var box = document.getElementsByClassName("box")[i];


////////////////
box.addEventListener("click", add);

function add {
  if turn = true {
    function newCross() {
      box.addEventListener("click", addCross);
      newcross.setAttribute("class", "cross");

      function addCross() {
        var newCross = document.createElement("img");
        //add URL
      }

      function [i];
      box.appendChild(newCross);
    }
  }
  else if turn = false {
    function newCircle() {
      box.addEventListener("click", addCircle);
      newcross.setAttribute("class", "cross");

      function addCross() {
        var newCross = document.createElement("img");
        //add URL
      }

      function [i];
      box.appendChild(newCross);
    };
  };
/////////////////

1. click
2. add cross

//trigger when clicks on box
//append new cross
function newCross() {
  box.addEventListener("click", addCross);
  function addCross() {
    var newCross = document.createElement("img");
      //add URL
    newCross.setAttribute("class", "cross");
  }
}


///////////////////

function keepItSecretKeepItSafe() {
    var newDiv= document.createElement("DIV");
    newDiv.setAttribute("id","the-ring");
    newDiv.setAttribute("class","magic-imbued-jewelry");

    newDiv.addEventListener("click", nazgulScreech);

    function nazgulScreech(){
      document.getElementById("nazgul-screech").play();
    }

    var frodo= document.getElementsByTagName("li")[0];
    frodo.appendChild(newDiv);
}

keepItSecretKeepItSafe();
