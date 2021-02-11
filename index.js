//for button press
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
  var str=this.innerText;
  makeSound(str);
  btnAnimation(str);
}

//for keypress
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  btnAnimation(event.key);
});

//to play the audio
function makeSound(key){
  if(key=="w"){
  var audio=new Audio("sounds/tom-1.mp3");}
  else if(key=="a")
  {  var audio=new Audio("sounds/tom-2.mp3");
  }
  else if(key=="s"){
    var audio=new Audio("sounds/tom-3.mp3");
  }
  else if(key=="d"){
    var audio=new Audio("sounds/tom-4.mp3");
  }
  else if(key=="j"){
    var audio=new Audio("sounds/snare.mp3");
  }
  else if(key=="l")
  {
    var audio=new Audio("sounds/kick-bass.mp3");
  }
  else if(key=="k")
  {
    var audio=new Audio("sounds/crash.mp3");
  }
  audio.play();

}

//for button animation

function btnAnimation(currentKey){
  var active=document.querySelector("."+currentKey);
  active.classList.add("pressed");
  setTimeout(function(){
    active.classList.remove("pressed");
  },100);

}
/*function add(n1,n2)
{return n1+n2;}
function multi(n1,n2){
  return n1*n2;
}
function calculator(n1,n2,operator){
  return operator(n1,n2);
}*/
