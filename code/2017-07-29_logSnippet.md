# How to generate headers for your log

I resume my habit of logging down coding activity, and then I see the importance of generating headers.

<!-- a screenshot of 100-days-of-code, 100 log headers  -->

## I. List of days

This snippet is an application of what I have learnt from Chapter 2 of《Eloquent JavaScript》. This javaScript snippet gives you a list of days for 100-days-of-code log.

**code**

```
var container = "";
for (i=34; i<65; i++) {
  container += "### Day " + i + ":" + "\n";
}
console.log(container);
```

**result**

> ### Day 1:
> ### Day 2:
.
.
.
> ### Day 64:

## II. Which day?

Then, I add the feature of displaying "----day" by adding a `counter`

**code**

```
var container = "";
var counter = 0;
for (i=34; i<65; i++) {
  counter ++;
  if (counter%7 == 1) {
    container += "### Day " + i + ": (Monday)" + "\n";
  } else if (counter%7 === 2){
    container += "### Day " + i + ": (Tuesday)" + "\n";
  } else if (counter%7 === 3) {
    container += "### Day " + i + ": (Wednesday)" + "\n";
  } else if (counter%7 === 4) {
    container += "### Day " + i + ": (Thursday)" + "\n";
  } else if (counter%7 === 5) {
    container += "### Day " + i + ": (Friday)" + "\n";
  } else if (counter%7 === 6) {
    container += "### Day " + i + ": (Saturday)" + "\n";
  } else if (counter%7 === 0) {
    container += "### Day " + i + ": (Sunday)" + "\n";
  } else {
    container += "";
  }
}
console.log(container);
```

**result**

> ### Day 1: (Monday)
> ### Day 2: (Tuesday)
.
.
.
> ### Day 64: (Monday)

If I want to start from Tuesday, set `counter = 1`
When `counter` enters the for-loop, `counter++` would add 1 to it.
When `counter` enters the string of if-else-if conditional, `counter = 2` and therefore it gives "Tuesday"!

## III. More details

To save copy-and-paste time, I add **Today's Progress**, **Thoughts** and **Link(s) to work** in `container` as well.

**code**

```
var container = "";
var counter = 0;
for (i=34; i<65; i++) {
  counter ++;
  if (counter%7 == 1) {
    container += "### Day " + i + ": (Monday)" + "\n" + "**Today's Progress**" + "\n" + "**Thoughts**" + "\n" + "**Link(s) to work**" + "\n" + "\n";
  } else if (counter%7 === 2){
    container += "### Day " + i + ": (Tuesday)" + "\n" + "**Today's Progress**" + "\n" + "**Thoughts**" + "\n" + "**Link(s) to work**" + "\n" + "\n";
  } else if (counter%7 === 3) {
    container += "### Day " + i + ": (Wednesday)" + "\n" + "**Today's Progress**" + "\n" + "**Thoughts**" + "\n" + "**Link(s) to work**" + "\n" + "\n";
  } else if (counter%7 === 4) {
    container += "### Day " + i + ": (Thursday)" + "\n" + "**Today's Progress**" + "\n" + "**Thoughts**" + "\n" + "**Link(s) to work**" + "\n" + "\n";
  } else if (counter%7 === 5) {
    container += "### Day " + i + ": (Friday)" + "\n" + "**Today's Progress**" + "\n" + "**Thoughts**" + "\n" + "**Link(s) to work**" + "\n" + "\n";
  } else if (counter%7 === 6) {
    container += "### Day " + i + ": (Saturday)" + "\n" + "**Today's Progress**" + "\n" + "**Thoughts**" + "\n" + "**Link(s) to work**" + "\n" + "\n";
  } else if (counter%7 === 0) {
    container += "### Day " + i + ": (Sunday)" + "\n" + "**Today's Progress**" + "\n" + "**Thoughts**" + "\n" + "**Link(s) to work**" + "\n" + "\n";
  } else {
    container += "";
  }
}
console.log(container);
```

**result**

>### Day 34: (Tuesday)
>**Today's Progress**
>
**Thoughts**
>
**Link(s) to work**
>
>### Day 35: (Wednesday)
>**Today's Progress**
>
**Thoughts**
>
**Link(s) to work**
.
.
.
>### Day 64: (Thursday)
>**Today's Progress**
>
**Thoughts**
>
**Link(s) to work**


## IV. Simpler Code

The code snippet looks messy with repeating `"**Today's Progress**" + "\n" + "**Thoughts**" + "\n" + "**Link(s) to work**" + "\n" + "\n";`. I try keep myself DRY (Don't Repeat Yourself) and improve the readability of the snippet.

**code**

```
var container = "";
var counter = 0;
for (i=34; i<65; i++) {
  counter ++;
  if (counter%7 == 1) {
    container += "### Day " + i + ": (Monday)";
    } else if (counter%7 === 2) {
    container += "### Day " + i + ": (Tuesday)";
    } else if (counter%7 === 3) {
    container += "### Day " + i + ": (Wednesday)";
    } else if (counter%7 === 4) {
    container += "### Day " + i + ": (Thursday)";
    } else if (counter%7 === 5) {
    container += "### Day " + i + ": (Friday)";
    } else if (counter%7 === 6) {
    container += "### Day " + i + ": (Saturday)";
    } else {
    container += "### Day " + i + ": (Sunday)";
    }
  container += "\n" + "\n" + "**Today's Progress**" + "\n" + "\n" + "**Thoughts**" + "\n" + "\n" + "**Link(s) to work**" + "\n" + "\n" + "\n";
}
console.log(container);
```

**result**

>### Day 34: (Tuesday)
>**Today's Progress**
>
**Thoughts**
>
**Link(s) to work**
>
>### Day 35: (Wednesday)
>**Today's Progress**
>
**Thoughts**
>
**Link(s) to work**
.
.
.
>### Day 64: (Thursday)
>**Today's Progress**
>
**Thoughts**
>
**Link(s) to work**

## P. S.

This code snippet works in Opera and Chrome console, but it does not work in FireFox console. In FireFox, the code can run but the result is `undefined`.
