// ========================== FUNCTIONS =========================== //
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

/*
  Sorts an array ascendant way. With an insertion sort algorithm

  param {int[]} array - Array of disordered numbers
  return {int[]} - A new ordored array.
*/
function insertionSort(arrayToSort) {
  var sortedArray = [arrayToSort[0]];

  for(var i = 1; i < arrayToSort.length; i++) {
    sortedArray[i] = arrayToSort[i];
    for(var j = sortedArray.length - 1; j > 0; j--) {
      if(sortedArray[j] > sortedArray[j - 1]) {
        break;
      } else {
        sortedArray[j] = sortedArray[j] + sortedArray[j - 1];
        sortedArray[j - 1] = sortedArray[j] - sortedArray[j - 1];
        sortedArray[j] = sortedArray[j] - sortedArray[j - 1];
      }
    }
  }

  return sortedArray;
}

/*
  Sorts an array ascendant way. With an selection sort algorithm

  param {int[]} array - Array of disordered numbers
  return {int[]} - Ordered array.
*/
function selectionSort(array) {
  for(var i = 0; i < array.length - 1; i++) {
    var index = i;

    for(var j = i + 1; j < array.length; j++) {
      if(array[index] > array[j]) {
        index = j;
      }
    }

    var aux = array[index];
    array[index] = array[i];
    array[i] = aux;
  }

  return array;
}

// ========================== PROGRAM =========================== //
var totalNumber = 100000; // Size of the array
var array = createArray(totalNumber, totalNumber * 1.02);

// Check if there is an valid input
if(isNaN(process.argv[2])) {
  console.log('Argument not valid or invalid');
} else {
  console.log('Linear search');
  var start = new Date().getTime();
  linearSearchRec(array, process.argv[2], 0);
  var end = new Date().getTime();

  console.log('time taked', (end - start) / 1000, 'seconds');

  array = selectionSort(array);

  console.log('\nBinary search');
  var start = new Date().getTime();
  binarySearch(array, process.argv[2], 0, array.length - 1);
  var end = new Date().getTime();

  console.log('time taked', (end - start) / 1000, 'seconds');
}
