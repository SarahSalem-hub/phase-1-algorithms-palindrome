function isPalindrome(word) {
  let flag = true
  for (let i= 0; i < word.length ; i++){
    if (flag){
      if (word[i] !== word[(word.length -1 ) - i]){
        
        flag = false   
      }
      else{
         flag = true
      }
    }
  }
     return flag
  }


/* 
  Add your pseudocode here
  iterate over the word from the left 
      inside the loop
      another iteration from the right
      compare the elements from left to elements from right
      make a flag to indicate the equality if true or not

    return flag
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
  console.log("");

  
}

module.exports = isPalindrome;

