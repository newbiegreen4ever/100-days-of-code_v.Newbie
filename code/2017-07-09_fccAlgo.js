/* freeCodeCamp Algorithm Exercise
 * URL: https://www.freecodecamp.org/challenges/confirm-the-ending
 * confirm whether str ends with target
 * -> confirm whether the ending part of the str is identical to target 
 * 
 */


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substring(str.length - target.length) === target) {
    return true;
  } else {
    return false;
  }
  
}

confirmEnding("Bastian", "n");
