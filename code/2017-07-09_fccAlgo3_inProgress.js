/* freeCodeCamp Algorithm Exercise
 * URL: https://www.freecodecamp.org/challenges/truncate-a-string
 * Truncate a string (first argument)
 * if it is longer than the given maximum string length (second argument).
 * the problem is actually quite straigthtforward. I overcomplicate it.
 */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);