/*
  Verify is a string is an isogram.
  Isogram is a logological term for a word or phrase without a repeating letter

  param {string} str - String to check

  return {bool} - true if it is an isogram
*/
function isIsogram(str) {
  for(var i = 0; i < str.length; i++) {
    for(var j = i + 1; j < str.length; j++){
      if(str.charAt(i).toLowerCase() == str.charAt(j).toLowerCase()) {
        return false;
      }
    }
  }

  return true;
}

var str = 'teste';

console.log(isIsogram(str));
