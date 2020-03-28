
//Q1

let number1 = 5;
let number2 = 10;

function max(num1, num2){
    if(num1 > num2){
        return num1;
    }else {
        return num2;
    }
}

document.getElementById("q1").innerHTML = "Largest Number From(" + number1 + ", " + number2 + ") is: " + max(number1, number2);

//Q2

let num1 = 6, num2 = 84, num3 = 71;

function maxOfThree(n1, n2, n3) {
    if(n1 > n2 && n1 > n3){
        return n1;
    }else if (n2 > n1 && n2 > n3){
        return n2;
    }else {
        return n3;
    }
}

document.getElementById("q2").innerHTML ="Largest Number From(" + num1 + ", " + num2 + ", " + num3 + ") is: " + maxOfThree(num1, num2, num3);

//Q3

function isVowel(character) {
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
        return true;
    }else {
        return false;
    }
}

document.getElementById("q3").innerHTML = isVowel('u');

//Q4

let arr = [1, 2, 3, 4];

function sum(array) {
    let sum = 0;

    for (let i =0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

function multiply(array) {
    let prod = 1;
    for (let i =0; i < array.length; i++){
        prod *= array[i];
    }
    return prod;
}

document.getElementById("q4").innerHTML = "Sum is: " + sum(arr) + " Product Is: " + multiply(arr);

//Q5

let stringReversal = "jag testar";

function reverse(str) {
    let c = str.split('');
    let result = " ";
    for (let i = c.length - 1; i >= 0; i--){
        result += c[i];
    }
    return result;
}

document.getElementById("q5").innerHTML = stringReversal + " | When Reversed Will Be | " + reverse(stringReversal);

//Q6

let words = ["This", "Longest", "Testing", "a", "world"];

function findLongestWord(arr) {
    let max = words[0].length;
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > max){
            max = arr[i].length;
        }
    }
    return max;
}

document.getElementById("q6").innerHTML = "Size of the longest word is " + findLongestWord(words);

//Q7

let words2 = ["This", "Longest", "Testing", "a", "world"];

function filterLongestWord(arr, num) {
    let result = [];
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > num){
            result[counter] = arr[i];
            counter++;
        }
    }
    return result.toString();
}

document.getElementById("q7").innerHTML = filterLongestWord(words2, 4);

//Q8

let squares = [1, 2, 3];

function computeSumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i] * arr[i];
    }
    return sum;
}

document.getElementById("q8").innerHTML = computeSumOfSquares(squares);

//Q9

let odds = [87, 5, 7, 2, 6, 1, 9, 33, 24, 15]

function printOddNumbersOnly(arr) {
    let oddArr = [];
    let counter = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            console.log(arr[i]);
            oddArr[counter] = arr[i];
            counter++;
        }
    }

    return oddArr.toString();
}

document.getElementById("q9").innerHTML = printOddNumbersOnly(odds);

//Q10

let evens = [1, 2, 3, 4, 5];

function computeSumOfSquaresOfEvensOnly(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sum += arr[i] * arr[i];
        }
    }

    return sum;
}

document.getElementById("q10").innerHTML = computeSumOfSquaresOfEvensOnly(evens);

//Q11

const array3 =[1, 2, 3, 4];
const reducer1 = (sum, val) => sum + val;
const reducer2 = (multiple, val) => multiple * val;

document.getElementById("q11").innerHTML = "Sum is: " + array3.reduce(reducer1) + " Multiplication is: " + array3.reduce(reducer2);

//Q12

const array4 = [1, 2, 3, 4, 5];
const  array5 = [19,9,11,0,12];

function findSecondBiggest(arr) {
    let max = arr[0], secondMax = arr[1];
    if(secondMax > max){
        let temp = max;
        max = secondMax;
        secondMax = temp;
    }
    for(let i = 2; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }else if(arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    return secondMax;
}

document.getElementById("q12").innerHTML = "Second Biggest Number is: " + findSecondBiggest(array4) + " Second Biggest Number is: " + findSecondBiggest(array5);

//Q13

function printFibo(n, a, b) {
    let output = [0, 1, 1];
    for (let i = 0, j = 3; i <= n; i++, j++){

        output[j] = output[i + 1] + output[i + 2];
    }

    return output.toString();
}

document.getElementById("q13").innerHTML = printFibo(6, 0, 1);

//Q14


//Q15
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s= date.getSeconds();
    let session = "AM";
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    if(h == 0){
        h = 12;
    }
    if (h > 12){
        h = h-12;
        session = "PM";
    }
    h = (h < 10)? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s;
    let d = year + "-" + month + "-" + day;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;
    document.getElementById("myDateDisplay").innerHTML = d;

    setTimeout(showTime, 1000);
}
showTime();
