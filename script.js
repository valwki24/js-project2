//String Manipulation Functions://

//Reverse a String: Write a function that reverses a given string.

/*
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); 
*/

//Count Characters: Create a function that counts the number of characters in a string.

/*
function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("ilovethecoding")); 
*/

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

/*
function capitalizeWords(sentence) {
  function processString(str) {
    var words = str.split(" ");
    var capitalizedWords = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(" ");
  }

  return processString(sentence);
}

console.log(capitalizeWords("hello valentine kibe"));
*/

//Array Functions:

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

/*
function findMaxAndMin(arr) {
  if (arr.length === 0) {
    throw new Error("empty");
  }

  var max = arr[0];
  var min = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max: max, min: min };
}

console.log(findMaxAndMin([1, 2, 3, 4, 5]));
*/

//Sum of Array: Create a function that calculates the sum of all elements in an array.

/*function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
*/

//Filter Array: Implement a function that filters out elements from an array based on a given condition.

/*
function Names(names) {
  return names.filter(function (name) {
    return name.endsWith("e");
  });
}
console.log(Names(["Judie", "James", "Julia", "Valentine"]));
*/

//Mathematical Functions:

//Factorial: Write a function to calculate the factorial of a given number.
//The product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.

//Prime Number Check: Create a function to check if a number is prime or not.

//function isPrime(n) {}

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
//The Fibonacci sequence is a set of integers (the Fibonacci numbers) that starts with a zero, followed by a one, then by another one, and then by a series of steadily increasing numbers.
// The sequence follows the rule that each number is equal to the sum of the preceding two numbers.
