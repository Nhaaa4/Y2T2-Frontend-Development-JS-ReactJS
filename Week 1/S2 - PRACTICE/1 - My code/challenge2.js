function challenge2(array) {
    var reverseArray = [];
    for (var i = 0; i < array.length; i++) {
        reverseArray.unshift(array[i]);
    }
    return reverseArray;
}

var array1 = [14, 15, 16, 20];
var array2 = [5, 4, 3, 2, 1];
var array3 = [];

console.log(challenge2(array1));
console.log(challenge2(array2));
console.log(challenge2(array3));