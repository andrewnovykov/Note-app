console.log('starting app');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

var command = process.argv[2];

const argv = yargs.argv;
//console.log('yargs', yargs.argv)

console.log('Command: ' + command);

if( command === 'add' ){
  var note = notes.addNote(argv.title, argv.body);
  if( note ) {
    console.log('Adding note .....');
    console.log(' ---------');
    console.log('Done');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
  //console.log('Listing all notes');
} else if (command === 'read') {
  notes.getNote(argv.title);
  //console.log('Reading   note');
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}


























//var user = os.userInfo();
//console.log(user.username);
//fs.appendFile('user.txt', `Hello ${user.username} ! You are ${notes.age}`   );

// var res = notes.addNote();
// console.log(res);

//console.log('result : ' + notes.add(9, -2));
//
// console.log(_.isString(1));
// console.log(_.isString('Andrew'));


// var filteredArray = _.uniq([1, 'Andrew', 2, 1, 3, 4, 1, 2, 5, 5 , 6, 7, 'Andrew']);
// console.log(filteredArray);
