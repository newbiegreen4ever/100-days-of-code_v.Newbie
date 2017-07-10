# [《Eloquent JavaScript》](http://eloquentjavascript.net/code/)

## Chapter 2 : Program Structure

#### [Question 2.1](http://eloquentjavascript.net/code/#2.1) - Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle
```
#
##
###
####
#####
######
#######
```
###### My solution
I try to utilize `accumulator` to repeat string. That is what I learnt from freeCodeCamp intro to algo.
```
function repeatStr(count, str) {
  var accumulator = '';
  while (count > 0) {
    accumulator += str;
    console.log(accumulator);
    count--
  }
}

repeatStr(7, '#');`
```
##### 《ES》 solution
I have never thought of applying for-loop to anything except `(i = 0; i < arr.length; i++)`. A typcial high CP solution (Concise & Precise) !!
```
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
```
--------------------------------
#### [Question 2.2](http://eloquentjavascript.net/code/#2.2) - FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

###### My solution
```
for (var N = 1; N < 101; N++)
  if (N%3==0 && N%5==0) {
    console.log('FizzBuzz');
  } else if (N%3==0 && N%5!==0) {
    console.log('Fizz');
  } else if (N%3!==0 && N%5==0) {
    console.log('Buzz');
  } else {
    console.log(N);
  }
```
##### 《ES》 solution
Lesson behind: It is always a good idea to start with a variable of empty string when displaying things.
```
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
```
--------------------------------------
#### [Question 2.3](http://eloquentjavascript.net/code/#2.3) - Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:
```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

###### My solution
I just copy what 《ES》 did in Q2.2. Still cannot convert that loop into a general solution.

```
for (var n = 1; n <= 8; n++) {
  var output = "";
  if (n % 2 == 0)
    output += "# # # # \n";
  if (n % 2 == 1)
    output += " # # # #\n";
  console.log(output);
}

```
##### 《ES》 solution
How can someone think of `(x + y) % 2 == 0` ?
```
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
```
