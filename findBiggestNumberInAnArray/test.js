//Input: [ 1, 2, 3 ]
//Output: 3
//Input: [ 3, 6, 4, 5, 2, 1 ]
//Output: 6
//Input: [ 3, 3, 3 ]
//Output: 3
//Input: [1, 9, 2, 4, 5, 6, 3, 8]
//Output: 9

array1 = [1, 2, 3]; //array length = 3
array2 = [3, 6, 4, 5, 2, 1];//array length = 6
array3 = [3, 3, 3]; //array length = 3
array4 = [-2 ,1, 9, 2, 4, 5, 6, 3, 8, -1]; //array length = 8
array5 = [-3. -4, -1, -2, -5];


//method 1
var BiggestNumber = null;

var findBiggestNumberByIteration = function (arrayName) {
    for (i = 0; i < arrayName.length; i = i + 1) {
        if ((arrayName[i] > BiggestNumber) === true) { BiggestNumber = arrayName[i]; } 
    } return BiggestNumber;
}

findBiggestNumberByIteration(array5)
console.log(BiggestNumber)

//method 2
console.log(Math.max(...array5))


//method 3
var findBiggestNumberBySortingArray = function (arrayName) {
    arrayName.sort(function (a, b) { return a - b });
    console.log(arrayName[arrayName.length - 1]);
    var outputBiggestNumber = arrayName[arrayName.length - 1];
    console.log(outputBiggestNumber)
    return outputBiggestNumber;
}
findBiggestNumberBySortingArray(array5);




