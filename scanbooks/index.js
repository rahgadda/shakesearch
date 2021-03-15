/* 
 Copyright Rahul Kiran Gaddam 2021.
 Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

 This file is licensed under the ISC License.
*/

//Lib imports
const fs = require('fs');
const lineByLine = require('n-readlines');

//Read files in books folder
const sourceFolderLocation = "../books"
fs.readdirSync(sourceFolderLocation).forEach(fileName => {
  if(fileName.toString().endsWith(".txt")){
    console.log("Processing File - "+fileName);
    txtToJson(fileName);
    console.log("Completed Processing File - "+fileName);
  }
});


//Processing each file and create JSON
function txtToJson(fileName){
  let scanedBookData = {
        table: []
  }; 
  let line;
  let lineNumber = 0; 

  const liner = new lineByLine(sourceFolderLocation+'/'+fileName);
  while (line = liner.next()) {
    console.log('Line ' + lineNumber + ': ' + line.toString('utf8'));
    lineNumber++;
  }
}