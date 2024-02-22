/* Button Click Listener */

var whiteNotes = ["A", "B", "C", "D", "E", "F", "G"];
var blackNotesSus = ["A#", "C#", "D#", "F#", "G#"];
var blackNotesBem = ["Bb", "Db", "Eb", "Gb", "Ab"];
var notesArray = [];

var startButton = document.querySelector(".startButton");
var stopButton = document.querySelector(".stopButton");
var notesDisplay = document.querySelector(".notesDisplay");
var checkBox = document.querySelectorAll(".checkBox");
var notes = document.querySelectorAll(".note");

var randomNumber = Math.floor(Math.random() * whiteNotes.length);

var onOff;

startButton.addEventListener("click", function() {

    setNotes();
    randomNoteGen();
    onOff = setInterval( randomNoteGen, 2000);

  });

stopButton.addEventListener("click", function() {

    clearInterval( onOff );

  });

/* Keyboard press Listener */


/* Functions Define*/
function setNotes(){
  var notesArray = [];
  for(var i=0 ; i < checkBox.length; i++)
  {
    if(checkBox[i].checked){
      notesArray.push(notes[i].innerHTML);
    }
    console.log(notesArray[i]);
  }
  console.log(notes.length);
  console.log(checkBox.length);
  console.log(notesArray);
}
function randomNoteGen(){
    var randomNumber = Math.floor(Math.random() * whiteNotes.length);
    notesDisplay.innerHTML = whiteNotes[randomNumber];
}
