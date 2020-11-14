// version 0:
// console.log('\u0007');
// control z and bg 

// const time = process.argv[2]

// Version 1
// setTimeout(function() {
//     console.log('3 seconds have passed');
//     console.log('\u0007');
//     }, 4000);



//  version 2 

// const userInput = process.argv[2];
//     setTimeout(function(){
//         console.log(userInput + " seconds have passed");
//         console.log('\u0007');
//     }, userInput * 1000);


// version 3

const userInputs = process.argv.slice(2);
for(const userInput of userInputs) {
    setTimeout(function(){ 
        console.log(userInput + " seconds have passed");
        console.log('\u0007');
    }, userInput * 1000);
}