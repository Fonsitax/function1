/* function findLargest(arr =[1, 3, 7, 2, 50]) {
    return Math.max(...arr);
}
console.log(findLargest());
*/ 

function findLargest(arr) {
    if (arr.length === 0) return null;

    let largestNum = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];    //to update i again
        }
    }
    return largestNum;
}
//console.log(findLargest([1, 3, 7, 2, 50]));    

function checkEvenOdd(num){
    if (num % 2 === 0) {
        return "it is even";
    } else {
        return "it is odd";
    }
}
console.log(checkEvenOdd(5));
console.log(checkEvenOdd(2));