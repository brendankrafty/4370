var unsorted = populate();
console.log("Unsorted: " + unsorted.join(', '));

var sorted = unsorted.sort(function (a, b) { return a - b });
console.log("Sorted: " + sorted.join(', '));

function rand() {
    return Math.floor((Math.random() - 0.5) * 18);
}

function populate() {
    var arr = [];
    for (var i = 0; i <= 9; i++){
        arr.push(rand());
    }
    return arr;
}