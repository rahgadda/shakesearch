/* 
 Copyright Rahul Kiran Gaddam 2021.
 Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

 This file is licensed under the ISC License.
*/


//Read files in books folder
const sourceFolderLocation = "../books"
const fs = require('fs')
fs.readdirSync(sourceFolderLocation).forEach(file => {
  if(file.toString().endsWith(".txt")){
    //console.log(file);
    
  }
});