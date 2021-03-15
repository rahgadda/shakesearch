/* 
 Copyright Rahul Kiran Gaddam 2021.
 Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

 This file is licensed under the ISC License.
*/

//Lib imports
const fs = require('fs')

//Read files in books folder
const sourceFolderLocation = "../books"
fs.readdirSync(sourceFolderLocation).forEach(file => {
  let scanedBookData = {
        table: []
  };  

  if(file.toString().endsWith(".txt")){
    console.log("Processing File - "+file);
    
    console.log("Completed Processing File - "+file);
  }
});