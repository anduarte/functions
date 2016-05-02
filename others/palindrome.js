/*
  Function to check if the taked word is a palindrome.
  param {string} str - The string to check
  return {bool} - true If it is a palindrome
                  false if it is not
*/
function palindrome(str) {
  if(str.charAt(0) != str.charAt(str.length - 1)) {
    return false;
  } else if (str.length > 1) {
    palindrome(str.substring(1, str.length - 1));
  }

  return true;
}

var str = 'asddsfsdfsdf';
console.log(str, ', is a palindrome?\n', palindrome(str));
