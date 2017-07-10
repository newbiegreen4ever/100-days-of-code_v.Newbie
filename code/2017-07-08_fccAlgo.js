/* freeCodeCamp Algorithm Exercise
 * URL: https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays
 * Given a nested array of number, 
 * return the largest element in each nested array and 
 * group them in a seperate array
 * 
 */


function largestOfFour(arr) {
  // You can do this!
  var subArrMax = [];
  
  for (i = 0; i < arr.length; i++) {
    subArrMax[i] = 0;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > subArrMax[i]) {
        subArrMax[i] = arr[i][j];
      }
    }
  }
  
  return subArrMax;
    
    
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
