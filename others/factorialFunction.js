/*
  recursive factorial function
  n -> factorial of number -n-
*/

/*
  Factorial function made recursively

  param {int} n - Number to calculate is factorial

  return {int} - If it is less 2 it returns 1, otherwise returns the factorial
*/
function factorial(n) {
  if(n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
}

var n = process.argv[2];  // Gets the value to calculate by an argument when interperting the file

console.log('The factorial of', n, 'is', factorial(n));
