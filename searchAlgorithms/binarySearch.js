// ========================== FUNCTIONS =========================== //
/*
  Binary search made recursively.
  The array need to be sorted
  param {int} array - Array with random numbers. Ordered
  param {int} valueToFind - Value to find in the array
  param {int} posInitial - Initial position in the array
  param {int} posFinal - Final position in the array

  {void} - If value is found, print the position of the array, otherwise print 'Value not found'
*/
function binarySearch(array, valueToFind, posInitial, posFinal) {
  var middle = parseInt((posInitial + posFinal) / 2);

  // exit condition
  if(posInitial > posFinal || posFinal == 0) {
    console.log('Value not found');
    return;
  }

  if(array[middle] == valueToFind) {
    console.log('Value found', middle);
    return;
  } else if(valueToFind < array[middle]) {
    binarySearch(array, valueToFind, 0, middle - 1);
  } else if(valueToFind > array[middle]){
    binarySearch(array, valueToFind, middle + 1, posFinal);
  }
}

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var input = process.argv[2];  // Gets the value to calculate by an argument when interperting the file

// Check if there is an valid input
if(!isNaN(input)) {
  binarySearch(array, process.argv[2], 0, array.length - 1);
} else {
  console.log('Error not a number');
}
