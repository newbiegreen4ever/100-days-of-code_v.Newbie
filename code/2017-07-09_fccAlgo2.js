/* freeCodeCamp Algorithm Exercise
 * URL: https://www.freecodecamp.org/challenges/repeat-a-string-repeat-a-string
 * repeat 'str' for 'num' of times
 */


 function repeatStringNumTimes(str, num) {
   // repeat after me
   if (num > 1) {
     return str.concat(str, repeatStringNumTimes(str, num - 2));
   } if (num === 1) {
     return str;
   } else {
     return "";
   }
 }

 repeatStringNumTimes("abc", 4);
