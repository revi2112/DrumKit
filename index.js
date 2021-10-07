
//sound on button click

let sounds = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"];
var size = document.querySelectorAll(".drum").length;
for (let i = 0; i < size; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var btnInnerHTML = this.innerHTML;
    var path = "sounds/" + sounds[i];
    var audio = new Audio();
    audio.src = path;
    audio.play();
    buttonAnimation(btnInnerHTML);
    changecolor(btnInnerHTML);

  });
}

//adding key listner(sound on key click)
document.addEventListener("keydown", function(e) {
  switchComparision(e.key);
  buttonAnimation(e.key);
  changecolor(e.key);
});


function switchComparision(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default:
      break;
  }
}

//Button Animation

function buttonAnimation(currentKey){
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");

    setTimeout(function(){
      active.classList.remove("pressed");

    },120);
  }


function changecolor(currentKey){
   var active = document.querySelector("." + currentKey);
   active.classList.add("red");

   setTimeout(function(){
     active.classList.remove("red");

   },120);
}


//Random Music

document.querySelector(".ran-music").addEventListener("click",function(){

    let numofbeat = 30;

    let randomPlayer = setInterval(()=> {
      const randomindex = Math.floor(Math.random()*(size+1));
      var randb = document.querySelectorAll("button")[randomindex];
      switchComparision(randb.innerHTML);
      buttonAnimation(randb.innerHTML);
      changecolor(randb.innerHTML);


      numofbeat--;

      if(numofbeat == 0){
        clearInterval(randomPlayer);

      }
    },120);
});



//PRACTICE

//document.querySelector("button").addEventListener("click",handleClick);
/*
function handleClick() {
  alert("I got clicked!");
}*/

/*
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click",handleClick);
});
*/
//document.querySelectorAll("button").forEach( button => { button.addEventListener("click", function (){ alert("I got clicked"); }); });
/*
document.querySelectorAll("button").forEach(button =>
{
  button.addEventListener("click",function(){
    var text = this.textContent;
    alert(text+" got clicked");
  });

});*/

/*
document.querySelectorAll("button").forEach(button => {

  button.addEventListener("click",function(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  });
});

var size = document.querySelectorAll(".drum").length;

for (let i = 0; i < size; i++) {
  alert("hi");
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "yellow";
}
*/
