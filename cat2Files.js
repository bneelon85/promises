var fs = require('mz/fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputFileName1;
var inputFileName2;
var outputFileName;

rl.question("What is the first input file name? ", function(inpt1) {
    inputFileName1 = inpt1;
    console.log("Input1 file: ", inpt1);
    rl.question("What is the 2nd input file name? ", function(inpt2) {
    inputFileName2 = inpt2;
    console.log("Input2 file: ", inpt2);
    rl.question("What is the output file name? ", function(otpt) {
        outputFileName = otpt;
        console.log("Output file: ", otpt);
        rl.close();
var p1 = fs.readFile(inputFileName1,'utf8');
var p2 = fs.readFile(inputFileName2,'utf8');

Promise.all([p1,p2])
    .then(function(response){
        var con2cat = response[0]+response[1];
        fs.writeFile(outputFileName,con2cat);
    });
        });

    });
});

    
// var p1 = fs.readFile(inputFileName1,'utf8');
// var p2 = fs.readFile(inputFileName2,'utf8');

// Promise.all([p1,p2])
//     .then(function(response){
//         var con2cat = response[0]+response[1];
//         fs.writeFile(outputFileName,con2cat);
//     });
