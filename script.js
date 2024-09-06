const noteInput = document.getElementById("noteInput");
var notesArray = [];


function addNote() {
    const newNote = noteInput.value;
    if (newNote == "") {
        alert("Please enter valid text");
    } else {
        notesArray.push(newNote);
        noteInput.value = "";
        console.log(notesArray);
    }
}

