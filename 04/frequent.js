var myArray = populate();
console.log(myArray);

findMost(myArray);

function rand () {
    var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    return chars[Math.floor(Math.random() * chars.length)];
}

function populate() {
    var arr = [];
    for (var i = 0; i <= 29; i++) {
        arr.push(rand());
    }
    return arr;
}

function findMost (arr) {
    var n;
    var count = 1;
    var most;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++){
            if (arr[i] == arr[j]){
                n++;
            }
            if (count < n)
            {
                count = n;
                most = arr[i];
            }
        }
        n = 0;
    }
    console.log("Most frequent item: " + most);
    console.log("Found: " + count + " times");
}