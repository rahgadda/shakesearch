/* 
 Copyright Rahul Kiran Gaddam 2021.
 Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

 This file is licensed under the ISC License.
*/


//Lib imports
const fs = require('fs');
const lineByLine = require('n-readlines');


// Global Variables
const sourceFolderLocation = "../books"
const destinationFolderLocation = "../book-index-json"
let fileBurstingId = 1;


//Read files in books folder
fs.readdirSync(sourceFolderLocation).forEach(fileName => {
    if (fileName.toString().endsWith(".txt")) {
        console.log("Processing File - " + fileName);
        processTxtFile(fileName);
        console.log("Completed Processing File - " + fileName);
    }
});


//Processing each file
function processTxtFile(fileName) {
    let scannedBookData = [];
    let lineNumber = 1;
    fileBurstingCode = 1;

    const liner = new lineByLine(sourceFolderLocation + '/' + fileName);
    while (line = liner.next()) {
        //console.log('Line ' + lineNumber + ': ' + line.toString('utf8').replace("\r",""));
        let word = line.toString('utf8').toLowerCase().replace("\r","").trim();

        if(word.length > 0){
            scannedBookData.push({
                lineNumber: lineNumber,
                word: word
            });
            
            if (lineNumber > fileBurstingCode * 1000000) {
                txt2Json(scannedBookData, fileName);
                scannedBookData = [];
            }
        }
        lineNumber++;
    }
    //console.log(JSON.stringify(scannedBookData));
    txt2Json(scannedBookData, fileName);
}


// Create Json from Txt file
function txt2Json(scannedBookData, fileName) {
    fs.writeFileSync(
        destinationFolderLocation + "/" + fileName.toString().replace('.txt', fileBurstingCode + '.json'), 
        JSON.stringify(scannedBookData), 
        'utf8');
    fileBurstingCode++;
}
