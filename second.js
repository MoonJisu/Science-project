let st = new Array();
st[0] = 1; //산성
st[1] = 2; //염기성 
let abc;

function start(){
    let num = Math.round(Math.random()*2);
    let bDisplay = true;
    let con = document.getElementById("Q");
    if (con.style.display == 'none') con.style.display = 'block';
    else con.style.display = 'none';

    console.log(num);
    abc = num;
    return st[num];
    

}

function fbt(){
    let y = document.getElementById("divColor");
    
   if(abc == 1){
    y.style.backgroundColor="red";
    y.style.top="50%";
    
    console.log("red");
 }
  else {
       y.style.backgroundColor= "green";
  y.style.top="50%";
    console.log("green");
}
 
}

function sbt(){
    let abb = document.getElementById("divColor");
    
    if(abc == 1){
     abb.style.backgroundColor="yellow";
  }
   else {
    abb.style.backgroundColor= "blue";
 }
}

function tbt(){
    let abb = document.getElementById("divColor");
    
    if(abc == 1){
     abb.style.backgroundColor="white";
  }
   else {
    abb.style.backgroundColor= "red";
 }
}

function fbt(){
    let abb = document.getElementById("divColor");
    
    if(abc == 1){
     abb.style.backgroundColor="red";
  }
   else {
    abb.style.backgroundColor= "orange";
 }
}

function ffbt(){
    let abb = document.getElementById("divColor");
    
    if(abc == 1){
     abb.style.backgroundColor="yellow";
  }
   else {
    abb.style.backgroundColor= "blue";
 }
}

function acid(){
    if(abc ==1) alert("정답입니다!");
    else alert("틀렸습니다.");
}
function basi(){
    if(abc == 2) alert("정답입니다!");
    else alert("틀렸습니다.");
}