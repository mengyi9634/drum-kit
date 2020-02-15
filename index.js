// Detecting Button Press

function handleClick() {
  var buttonInnerHTML = this.innerHTML; //check what innerHTML element has been clicked and then make the relevant sound, i.e. to find the key of makeSound
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) { // use a for loop to achieve the action for all buttons
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick) // pass function as parameters; here addEventListener is a higher order function and handleClick is a callback function; callback function allows the code to wait for an action to call back, such as "keydown"
};

// Detecting Keyboard Press

function handlePress(event) {
  makeSound(event.key);  //check what key has been pressed and then make the relevant sound, i.e. to find the key of makeSound
  buttonAnimation(event.key);
}

document.addEventListener("keydown", handlePress)

// Common fuction used to select the sound

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

  }
}

// Common function used to show the animation

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // add class in js to apply some css style
  setTimeout(function() { // add a timeout to remove the class so as to remove the css style --> this is how to add animation
    activeButton.classList.remove("pressed");
  }, 100)
}


// // Constructor function -- Factory, Objects, Properties, Methods
//
// function BellBoy (name, age, hasWorkPermit, languages) { // this is the factor, be sure the constructor needs to be capitalized
//   this.name = name; // these are properties
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
//   this.moveCase = function() { // this is a method
//     pickUpSuitcase();
//     move();
//   }
// }
//
// var bellBoy1 = new BellBoy("Timmy", 20, true, ["English", "Chinese"]) // this is to initialize the object, be sure to use "new"
// var bellBoy2 = new BellBoy("Jimmy", 20, true, ["English", "Chinese"])

// Higher order function, callback function and how to trigger setInterval(function () {

// h1.addEventListener("click", function(event)) {
//   console.log(event)
// }
// Here addEventListener is the higher order function, function() is the callback function, "click" is the trigger for the callback function;
// callback function allows the code to wait for an action to call back, such as "click"
// event decides what exactlt triggers the callback function further

// Abstract example below
// function anotherAddEventListener(typeOfEvent, callback) {
//   // Detect event code...
//   var eventThatHappened = {
//     eventType:"keydown",
//     key:"p",
//     durationOfKeypress:2
//   }
//   if (eventThatHappened.eventType === typeOfEvent) {
//     callback(eventThatHappened)
//   }
// }
