// // ========================== FUNCTIONS =========================== //
/*
  Create an array of int.

  param {int} totalNumber - the total numbers to return
  param {int} maxNumber - The maximum number of the range

  return {int[]} - Array with random numbers. Disordered and without repeted numbers
*/
function createArray(totalNumber, maxNumber) {
  var array = [Math.floor(Math.random() * maxNumber) + 1];

  while(array.length < totalNumber) {
    var newNumber = Math.floor(Math.random() * maxNumber) + 1;

    for(var i = 0; i < array.length; i++) {
      if(newNumber == array[i]) {
        break;
      } else if(i == array.length - 1) {
        array[array.length] = newNumber;
      }
    }
  }

  return array;
}

/*
  Linear search made with a loop.

  param {int[]} array - Array of numbers
  param {int} valueToFind - Value to find in the array

  {void} - If value is found, print the position of the array, otherwise print 'Value not found'
*/
function linearSearchFor(array, valueToFind) {
  for (var index = 0; index < array.length; index++){
    if(array[index] == valueToFind) {
      console.log('Value found in the position: ', index);
      return;
    }
  }

  console.log('Value not found');
}

/*
  Linear search made recursively

  param {int[]} array - Array of numbers
  param {int} valueToFind - Value to find in the array
  param {int} index - The current position in the array that it is looking

  {void} - If value is found, print the position of the array, otherwise print 'Value not found'
*/
function linearSearchRec(array, valueToFind, index) {
  // locks if it is the number that we are locking for
  if(array[index] == valueToFind) {
    console.log('Value found in the position: ', index);
    return;
  }

  // if we are in the last position of the array, stops looking
  if(array.length - 1 == index) {
    console.log('Value not found');
    return;
  } else {
    linearSearchRec(array, valueToFind, ++index);
  }
}

// ========================== PROGRAM =========================== //
var totalNumber = 100000;  // Size of the array
var array = createArray(totalNumber, totalNumber * 1.2);

if(isNaN(process.argv[2])) {
  console.log('Argument not valid or invalid');
} else {
  console.log('Linear search with a for loop');
  var start = new Date().getTime();
  linearSearchFor(array, process.argv[2]);
  var end = new Date().getTime();

  console.log('Time taked by the for loop:', (end - start) / 1000, 'seconds');

  console.log('\nRecursive linear search');
  var start = new Date().getTime();
  linearSearchRec(array, process.argv[2], 0);
  var end = new Date().getTime();

  console.log('Time taked by the recursive function:', (end - start) / 1000, 'seconds');
}
