// Code your solutions in this file
//for loop
function printBadges(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
    }
    return arr;
};
printBadges(['Ada', 'Brendan', 'Ali']);

//while loop

function tailsNeverFails() {
    let x = 0;
    while (Math.random() >= 0.5) {
        x++
    }
    return `You got ${x} tails in a row!`;
};
