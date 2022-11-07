var myArray = populate();
console.log("Initial array: " + myArray.join(', '));

var shuffled = shuffle(myArray);
console.log("Shuffled array: " + shuffled.join(', '));


function rand() {
    return Math.floor((Math.random() - 0.5) * 18);
}

function populate() {
    var arr = [];
    for (var i = 0; i <= 5; i++) {
        arr.push(rand());
    }
    return arr;
}

function shuffle(arr){
    return arr.sort((a, b) => 0.5 - Math.random());
}