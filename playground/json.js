var obj = {
  name: "Andrew"
}

var stringObj = JSON.stringify(obj);

console.log(stringObj)


const fs = require('fs');

const someNote = {
  title: "Some",
  body: "Some body"
}

var someNoteString = JSON.stringify(someNote);
fs.writeFileSync( 'notes.json', someNoteString);

var objNote = fs.readFileSync('notes.json');
var note = JSON.parse(objNote);
console.log('----',note.title)
