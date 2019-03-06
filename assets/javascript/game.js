    var ganadou=0;
    var ganadoc=0;

var veces=0;
var Letras="";
var Letrasc="";
var GANU =0;
var GANC =0;



    document.onkeyup = function(event) {
var arr=[]; 
for (var idx='A'.charCodeAt(0),end='Z'.charCodeAt(0); idx <=end; ++idx){
    arr.push(String.fromCharCode(idx));
    } 
    var userGuess =  event.key;

    var userGuess1 =userGuess.toLowerCase();

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = arr[Math.floor(Math.random() * arr.length)];
console.log(computerGuess);
var computerGuess1 = computerGuess.toLowerCase();
veces=veces+1

console.log(Letras);
// Alerts the key the user pressed (userGuess).
//alert("User guess: " + userGuess1);
console.log(userGuess1);
console.log(veces);
// Alerts the Computer's guess.
//alert("Computer guess: " + computerGuess1);

if (computerGuess1 === userGuess1) {
    Letras= "";
Letrasc= "";
veces=0;
GANU=GANU+1;

} else {
if (veces > 9 ) {
Letras= "";
Letrasc= "";
veces=0;
GANC= GANC+1
}
else  {
  Letras=Letras + " " + userGuess1 ;
  Letrasc=Letrasc + " " + computerGuess1 ;
}
}
console.log(Letras);
TT.textContent = Letras;
TC.textContent = Letrasc;
GC.textContent = GANC;
GU.textContent = GANU;

if (GANU > GANC) {
GU.style.color = "green";
GC.style.color = "red";
}

if (GANU < GANC) {
GC.style.color = "green";
GU.style.color = "red";

}
if (GANU == GANC) {
GC.style.color = "black";
GU.style.color = "black";

}


// if (userGuess=="r" && computerGuess=="r") {
// Tie=Tie+1;
// } 
// else if (userGuess=="p" && computerGuess=="p") {
 //  Tie=Tie+1;
// }

// document.write(arr[10])
}