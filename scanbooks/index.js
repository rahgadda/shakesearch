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
let id = 0;
let concatenatedString = "";
let wordCounter = 0;
let fileBurstingCode = 1;


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
    let scanedBookData = {
        data: []
    };
    let line;
    let lineNumber = 1;
    id = 0;
    fileBurstingCode = 1;

    const liner = new lineByLine(sourceFolderLocation + '/' + fileName);
    while (line = liner.next()) {
        //console.log('Line ' + lineNumber + ': ' + line.toString('utf8'));
        //console.log(line.toString('utf8').split(' ').filter(s => s).join(' '));

        line.toString('utf8')
            .split(' ').filter(s => s)
            .join(' ').split(' ').forEach(
                function (word) {
                    // console.log(word);
                    // console.log(concatenatedString);
                    concatenatedString = concatenatedString + " " + word;
                    scanedBookData.data.push(
                        {
                            id: id,
                            lineNumber: lineNumber,
                            word: word
                        }
                    );

                    if (wordCounter > 0) {
                        id++;
                        scanedBookData.data.push(
                            {
                                id: id,
                                lineNumber: lineNumber,
                                word: concatenatedString
                            }
                        );
                    }

                    id++;
                    wordCounter++;
                }
            );

        concatenatedString = "";
        wordCounter = 0;
        lineNumber++;

        if(lineNumber > fileBurstingCode*4000) {
            txt2Json(scanedBookData, fileName);
            scanedBookData = {
                data: []
            };
        }
    }

    //console.log(JSON.stringify(scanedBookData));
    txt2Json(scanedBookData, fileName);
}


// Create Json from Txt file
function txt2Json(scanedBookData, fileName) {
    fs.writeFileSync(destinationFolderLocation + "/" + fileName.toString().replace('.txt', fileBurstingCode+'.json'), JSON.stringify(scanedBookData), 'utf8');
    fileBurstingCode++;
}
