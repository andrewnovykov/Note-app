
console.log('srarting notes.js   ....');

const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  } catch(e) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = function( title, body ) {
  var notes = fetchNotes();
  var note = {
    //es6 notation
    title,
    body
    // title: title,
    // body: body
  }


  var duplicateNote = notes.filter( (note)=> note.title === title );

  if(duplicateNote.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    console.log('WTF?');
  }




}

var getAll = () => {
  console.log('Getting all notes');
}

var getNote = (title) => {
  console.log('Getting note ', title);
}

var removeNote = (title) => {
  console.log('Removing note ,', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}

//console.log(module);

//module.exports.age = 25;


//
// module.exports.addNote = ()=>{
//   console.log('Add note');
//   return 'New note';
// }
//
// module.exports.add = (a , b )=> {
//   return a + b;
// }
