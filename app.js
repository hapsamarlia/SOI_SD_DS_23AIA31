let arr = [1, 2, 3, 3, 5, 5, 6, 7, 8 ,8];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); 

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome('racecar'));  // true
console.log(isPalindrome('hello'));    // false

function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

console.log(capitalizeWords('hi hello'));0