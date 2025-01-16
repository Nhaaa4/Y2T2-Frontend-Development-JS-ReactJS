function challenge3(array) {
    var sum = 0;
    if (array.length == 0) return 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

var array1 = [85, 90, 78, 92];
var array2 = [10, 20, 30];
var array3 = [];

console.log(challenge3(array1));
console.log(challenge3(array2));
console.log(challenge3(array3));
