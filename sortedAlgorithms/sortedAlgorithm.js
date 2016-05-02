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

var array = [1,5,3,9,2,1,3,1,1];
var array2 = [1,5,3,9,2,1,3,1,1];

console.log('Selection sort:', selectionSort(array));
console.log('Insertion sort:', insertionSort(array2));
