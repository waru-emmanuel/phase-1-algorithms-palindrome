function isPalindrome(word) {
      // Write your algorithm here
        // Compare characters from left and right ends of the word
         for (let left = 0, right = word.length - 1; left < right; left++, right--) {
       // If characters at left and right positions are not equal, it's not a palindrome
               if (word[left] !== word[right]) {
                 return false;
               }
            }
       // If all characters match, it's a palindrome
         return true;
     }
/* 
  Add your pseudocode here
   1. Convert the word to lowercase. all words to be the same case
  2. compare characters on the left and right positions respectively
  3. Iterate until the pointers meet in the middle.
  4. If the loop completes without returning false, the word is a palindrome.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
