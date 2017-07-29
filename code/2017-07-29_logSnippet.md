# How to generate headers for your log

```
var container = "";
for (i=34; i<65; i++) {
  container += "### Day " + i + ":" + "\n";
}
console.log(container);
```
This javaScript snippet gives you a list of days for 100-days-of-code log
> ### Day 1:
> ### Day 2:
.
.
.
> ### Day 64:

This snippet is an application of what I have learnt from Chapter 2 of《Eloquent JavaScript》

Then, I add the feature of displaying "----day" by adding a `counter`
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
> ### Day 1: (Monday)
> ### Day 2: (Tuesday)
.
.
.
> ### Day 64: (Monday)

If I want to start from Tuesday, set `counter = 1`
When `counter` enters the for-loop, `counter++` would add 1 to it.
When `counter` enters the string of if-else-if conditional, `counter = 2` and therefore it gives "Tuesday"!

To save copy-and-paste time, I add **Today's Progress**, **Thoughts** and **Link(s) to work** in `container` as well.

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

>### Day 34: (Tuesday)
>**Today's Progress**
>**Thoughts**
>**Link(s) to work**
>
>### Day 35: (Wednesday)
>**Today's Progress**
>**Thoughts**
>**Link(s) to work**
.
.
.
>### Day 64: (Thursday)
>**Today's Progress**
>**Thoughts**
>**Link(s) to work**
