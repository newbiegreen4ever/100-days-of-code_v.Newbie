# 100 Days Of Code (Newbie version) - Log
Given my limited coding skills and computer science knowledge, I decide to take this challenge slowly in a vanilla fashion. The goal is to working on Coding Skills / Computer Science at least 0.5 hr every day in order to achieve steady progress.
> (1.01)^100 = 2.70 (corr. to 3 sig. fig.)

### Day 1: 2017-06-04 (Sunday)
<!--- ##### (delete me or comment me out)--->

**Today's Progress**: Look for solution to download my p5.js canvas animation as .gif, Change parameters in Typing Monkey Example from Kadenze's Nature of Code

**Thoughts:** CCapture.js is a possible solution. It seems that I can download that by adding another .js library, but it will take me at least 1 - 2 weeks before I can implement it in my p5.js sketch. For genetic algorithm, I have to take a closer look at
1. fitness function
2. probability
3. reproduction mechanism
4. crossover mechanism
5. mutation mechanism

Ha, it looks like the BCB material in my UG years.

**Link to work:**
1. [Github page of CCapture.js](https://github.com/spite/ccapture.js)
1. [Nature of Code at Kadenze](https://www.kadenze.com/courses/the-nature-of-code/info)

### Day 2: 2017-06-05 (Monday)
<!--- ##### (delete me or comment me out) --->

**Today's Progress**: Set up an a/c and read about the Beatles, Figure out how to clone with git command line and Flip through the code of example CCapture.js

**Thoughts**: Putting thoughts into action seems daunting at first, and it goes smoothly after the first step. Account set, ready to throw the party~ Thanks to the outdoor office chore, I have an extra 0.5 hr to read about the Beatles. This adds to 1 hr reading including the 0.5 hr session on commute. I still don't quite understand the CCapture.js example code, and need to work harder on that.

**Link(s) to work**:
1. [Github page of CCapture.js](https://github.com/spite/ccapture.js)
2. [The Beatles - Octopus's Garden](https://www.youtube.com/watch?v=c0vFUxE3SrM)

### Day 3: 2017-06-06 (Tuesday)

**Today's Progress**: Practise Markdown, Study Typing Monkey example from Nature of Code and Write my first html & javaScript snippet in my life

**Thoughts**

*Markdown*

I didn't know that a numbered list can be created _without_ specifying the bullet number!

markdown syntax

`1.
 1.
 1.
 1.`

preview result

1.
1.
1.
1.
1.

*Surfing internet*

I would like to learn more about the Beatle's music. There are a lot of great resources on the Beatles. Haha I browse some of them at office.
1. [Introduction to the Beatles A](http://coinacademy.co/digital-currency-tutorials/)
1. [Introduction to the Beatles B](https://digitalcurrency.unic.ac.cy/free-introductory-mooc/)
1. [Introduction to the Beatles C](http://bitcoin-class.org/classes/)
1. [Introduction to the Beatles Coursera](https://www.coursera.org/learn/cryptocurrency?siteID=SAyYsTvLiGQ-YQu6cnj.75ruGnWaqsC9BA&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=SAyYsTvLiGQ)
1. [Introduction to the Beatles Udemy](https://www.udemy.com/bitcoin-or-how-i-learned-to-stop-worrying-and-love-crypto/)

*HTML Snippet*

I study the .js files in the example and follow the line, then a question bumps up: What is the output of `function DNA(num)`? A few random character or just a few? In order to verify that, I try the line in different javaScript tester, and putting all the pieces together gives me an html file that gives random character, just one character.

**Link(s) to work** [HTML random character snippet](~/Code/2016-06-06_randomCharacter.html)


### Day 4: 2017-06-07 (Wednesday)

**Today's Progress** Fix Git commit problem

**Thoughts**

*Git*

I spent a morning trying to figure out why I can't commit from my Git Desktop OMG. I never expected that Git, a versioning tool, would be a problem to be included in my 100-day challenge, but it _is_ a problem. There is a little problem with email privacy setting, and it is all solved in a morning, thanks to Stack Overflow. I get a pretty log too~

1. [Stack Overflow - Github Windows 'Failed to sync this branch'](https://stackoverflow.com/questions/15387640/github-windows-failed-to-sync-this-branch)
2. [Stack Overflow - Github email privacy restrictions](https://stackoverflow.com/questions/43378060/meaning-of-the-github-message-push-declined-due-to-email-privacy-restrictions)
3. [Stack Overflow - Amend Github commit email](https://stackoverflow.com/questions/4981126/how-to-amend-several-commits-in-git-to-change-author/25815116#25815116)
4. [Stack Overflow - Get readable pretty log from Git](https://stackoverflow.com/questions/10063407/git-log-output-log-file)

**Link(s) to work** [GitHub log](code/2017-06-07_readableGitHubLog.log)


### Day 5: 2017-06-08 (Thursday)

**Today's Progress** Review javaScript, Study Typing Monkey example from Nature of Code and Come up with 2 variations of crossover method

**Thoughts**
＊<<Remainder>> and <<Allele>> are possible ways to crossover, the evolution becomes even faster when fitness is relating to crossover. Next time I should look around BCB text books and try to implement a realistic crossover.

＊Do not mess with the array index, otherwise the evolution will never complete haha, imagine your best phrase being constantly disrupted by displaced character

**Link(s) to work** [Two variations of crossover](code/2017-06-08_twoCrossoverMethodsDNA.js)


### Day 6: 2017-06-09 (Friday)

**Today's Progress** Study Typing Monkey example from Nature of Code and Finish some freeCodeCamp exercises

**Thoughts**
The way of selecting an element of an array reminds me of calling a student based on their number.

Test thyself:
`array = ["Peter", "Paul", "Mary", "Siu Ming", "Fai Fai", "Pear"];

for (var i = 0; i < array.length; i++){
  var a = floor(random(array.length));
  var beingSelected = array[a];
  }

console.log(beingSelected);`
array.length = 6
array[5] = "Pear" && array[0] = "Peter"
math.random(6) may generate 5.3
math.floor(5.3) = 5
array[5] = "Pear"

HTML exercises on freeCodeCamp are quite well designed. The cat site is cute.

**Link(s) to work** [freeCodeCamp](http://freeCodeCamp.com)


### Day 7: 2017-06-10 (Saturday)

**Today's Progress** Finish some freeCodeCamp exercises

**Thoughts** When I am motivated, reviewing Kadenze's Nature of Code genetic algorithm more is more engaging than working on basic html exercises by freeCodeCamp. However, when I am _not_ motivated and want to slack off,  freeCodeCamp is the best option. It feels good to work on something strictly guided when you are at lost and can't think of nothing to do.

**Link(s) to work** [freeCodeCamp](http://freeCodeCamp.com)


### Day 8: 2017-06-11 (Sunday)

**Today's Progress** Finish some freeCodeCamp exercises

**Thoughts** Another lazy day, another freeCodeCamp day. I save the exercises finished as html pages (no copyright infringement intended, just for the purpose of learning) and realize that freeCodeCamp exercises can really be implemented in a simple and neat webpage. If I walked through freeCodeCamp HTML chapters when I was taking COMP1001, I am sure that my grade would be higher than a sloppy B-.

**Link(s) to work**
1. [freeCodeCamp - Cat Photo Page](code/2017-06-11_freeCodeCamp-catPhotoPage.html)
2. [freeCodeCamp - Padding & Margin Box](code/2017-06-11_freeCodeCamp-paddingBox.html)


### Day 9: 2017-06-12 (Monday)

**Today's Progress** Finish some freeCodeCamp exercises, Study Smart Rocket example from Nature of Code and Get more familiar with Git

**Thoughts** Wake up early to do some freeCodeCamp exercises. It is a great way to come up with something to work on if you feel lazy. Come up with an idea on visual implementation of genetic algorithm, should compare that idea with Smark Rocket example tonight.

Where do `this.hitObstacle` and `this.hitTarget` come from? Are they Boolean parameters, or functions? I am confused.

Figure out my current favorite style for git log.
`git log --pretty=format:'%ai%n%h : %s%n%N' --graph > log.log`

**Link(s) to work** [freeCodeCamp - Overriding Style](code/2017-06-12_freeCodeCamp-styleOverriding.html)


### Day 10: 2017-06-13 (Tuesday)

**Today's Progress** Finish some freeCodeCamp exercises and Read _Eloquent javaScript_(p1-p19)

**Thoughts** Hmmmm I can't show the good-looking CSS style in my laptop. Why? Aiiii..... I thought I could work on Smart Rocket example, but laziness got me. Luckily, I shrink the target hour from 1hr to 0.5hr, so a refreshing morning with freeCodeCamp would satisfy the minium requirement.

**Link(s) to work** [freeCodeCamp - Bootstrap CSS day 1](code/2017-06-13_bootstrapCSSday1.html)


### Day 11: 2017-06-14 (Wednesday)

**Today's Progress** Finish some freeCodeCamp exercises (and Join my local groups)

**Thoughts**

I defeat my old self living in yesterday by successfully loading Bootstrap CSS in the example html pages. Hope to be more hardworking tonight.

Finally figure out that `this.hitObstacle` and `this.hitTarget` are Booleans, they are like on/off for a switch, and the switch should be a downstream function.

**Link(s) to work**
1. [freeCodeCamp - Bootstrap CSS day 2](code/2017-06-14_bootstrapCSSday2.html)
2. [freeCodeCamp - Button Playground](code/2017-06-14_jQueryPlayground.html)


### Day 12: 2017-06-15 (Thursday)

**Today's Progress** Finish some freeCodeCamp exercises

**Thoughts**

Finish the jQuery section in a morning. Hmm more or less the same with p5.js. Though I am still far from a master in browser canvas painting, the Kadenze's course does give some takeaway. Still can't load jQuery in the web, why?

Surf the web in office. Oh There is a working holiday arrangement between the place I live and UK, and there is an interesting _free_ bootcamp in the UK, called Founders and Coders. Ha if someone from this city is very good, s/he may apply for a working holiday visa and join that bootcamp.

**Link(s) to work** [freeCodeCamp - jQuery](code/2017-06-15_jQueryday1.html)

### Day 13: 2017-06-16 (Friday)

**Today's Progress** Research for freeCodeCamp tribute page exercise

**Thoughts**

Copy some contents from wiki (citation will be provided, no plagiarism haha), Tidy them up in markdown format and Convert them to html5 by pandoc. Is that cheating? I don't think so. This is working hard in a smart way. It saves me a lot of backbreaking chore putting content between html tags <></>.

The Bootstrap themes at [Bootswatch](https://bootswatch.com/) are very nice. Will try to download them all by httrack.

**Link(s) to work** [freeCodeCamp - tribute page draft html](code/2017-06-16_tributePage-content.md.html)

### Day 14: 2017-06-17 (Saturday)

**Today's Progress** Study the template found in Codepen and Shrink the tribute page content

**Thoughts**

Find a nice template with an affixed navigation panel on the right and a scrolling section for contents. After pasting all contents inside, Hmmmm the page still looks weird with an improperly formatted right navigation bar. Why is that? It looks all good in someone else's Codepen.

Trim down the contents, hope that it will make the tribute page more interesting, or at least less boring.

**Link(s) to work**
1. [Bootstrap3 template - html](code/2017-06-17_tributePage_template_Bootstrap3.html)
2. [Bootstrap3 template - css](code/2017-06-17_tributePage_template_Bootstrap3.css)
3. [Bootstrap3 template - js](code/2017-06-17_tributePage_template_Bootstrap3.js)
4. [freeCodeCamp - tribute page content draft v2](code/2017-06-17_tributePage-content.md)

### Day 15: 2017-06-18 (Sunday)

**Today's Progress** Shrink the tribute page content and Fill in the Bootstrap3 template

**Thoughts**

Finally understand why the right navigation bar doesn't work in my Codepen! It's about version of Bootstrap css loaded in the page. I selected Bootstrap4, but the template was made from Bootstrap3! `<panel>` is obsolete in Bootstrap4 and replaced by `<card>`!

Further cut down the contents, add more pictures by `<figure>`, and the tribute page starts to look decent.

**Link(s) to work** [freeCodeCamp - tribute page html draft v2](code/2017-06-18_tributePage_template_filled.html)

### Day 16: 2017-06-19 (Monday)

**Today's Progress** Arrange images in tribute page and Add a carousel

**Thoughts** Finalize content and format in tribute page after 4 days of work, with a lot of help from nice people uploading their templates at Codepen and W3School. All I need is a nice css color scheme.

**Link(s) to work** [freeCodeCamp - tribute page draft](https://codepen.io/newbiegreen4ever/pen/dRpEez)

### Day 17: 2017-06-20 (Tuesday)

**Today's Progress** Draft css, Tidy up .js code for tribute page and Finalize my tribute page about Ada Byron!

**Thoughts** Yooooooo! First webpage shipped! Color scheme is much more difficult than I imagined. Even though the color scheme looks good in the color ring, when you try to apply the scheme to your page, the result is often a corny old-fashioned product. .js code is still too messy, after all I compile several people's codes~ Overall, I am satisfied with my tribute page which only takes me around 5 days to finish.

It's time to prepared for my portfolio~ Feel that need for speed~

**Link(s) to work**
1. [freeCodeCamp - finalized tribute page - CodePen css](code/2017-06-20_tribute page_codepen.css)
2. [freeCodeCamp - finalized tribute page - CodePen js](code/2017-06-20_tribute page_codepen.js)
3. [freeCodeCamp - finalized tribute page - CodePen html](code/2017-06-20_tribute page_codepen.html)

### Day 18: 2017-06-21 (Wednesday)

**Today's Progress** Research for my portfolio page and Draw my plan

**Thoughts** Hmmm A good sketch is the start of a good portfolio page. I think my sketch looks good.

**Link(s) to work** pencil sketch

### Day 19: 2017-06-22 (Thursday)

**Today's Progress** Read about Pug, Apply Pug format in writing and Write pug draft of freeCodeCamp portfolio homework

**Thoughts** I watch some videos about making CSS animation this morning. I come across "Jade" in the video, then I look for more information. OMG it's a great way to simplify and beautify html code. Without all the ugly tags, html code is much more pleasant to read!

**Link(s) to work** [freeCodeCamp - draft portfolio page - Pug draft](code/2017-06-22_greenFolio_draft.pug)

### Day 20: 2017-06-23 (Friday)

**Today's Progress** Read other portfolio pages, Read about html and Rewrite Pug draft of freeCodeCamp portfolio homework

**Thoughts** I think the big "Kakapo" can be replaced by a jumbotron with a big image as background. I hope in my portfolio page, there can be a big CSS animation instead of a still image.

**Link(s) to work**
1. [freeCodeCamp - draft portfolio page - Pug draft](code/2017-06-23_greenFolio_draft.pug)
2. [freeCodeCamp - draft portfolio page - css draft](code/2017-06-23_greenFolio_draft.css)

> Not feeling well, have a sick leave for a couple of days

### Day 21: 2017-06-26 (Monday)

**Today's Progress** Refine Pug draft of freeCodeCamp portfolio, Apply `card` with equal height and Read Firefox MDN notes about introduction to javaScript

**Thoughts**
How to separate `card` in Bootstrap4, such that they don't stick together?
- Add a class
`div.card.mb-3`
mb-3 => margin-bottom 3 px

- Change the CSS
`.card {
margin: 10px 10px 10px 10px;
}`

- Container v. Container-fluid
Both are necessary to apply column, but the former does not span the whole viewport.

`let` v. `var`
variable scope inside a bracket v. global variable scope, therefore may be _updated_ in an unexpected way

`return` v. `throw`
break the execution of function v. interrupt with an exception

**Link(s) to work**
1. [freeCodeCamp - draft portfolio page - Pug draft](code/2017-06-26_greenFolio_draft.pug)
2. [freeCodeCamp - draft portfolio page - css draft](code/2017-06-26_greenFolio_draft.css)

### Day 22: 2017-06-27 (Tuesday)

**Today's Progress** Refine Pug draft of freeCodeCamp portfolio

**Thoughts** Maybe I should use css buttons for social media, and use form for comment & contact. Still in the mood of flu, lethargic.

**Link(s) to work** [freeCodeCamp - draft portfolio page - Pug draft](code/2017-06-27_greenFolio_draft.pug)

> Not feeling well, have a sick leave for a day

### Day 23: 2017-06-29 (Thursday)

**Today's Progress** Refine Pug draft of freeCodeCamp portfolio and Apply social buttons

**Thoughts**

Find a set of cool pure-css buttons from internet. I kind of copy and paste the code (since it is pure-css and the code is modularly well written) and the buttons work well! I want the links of each button to be more personalized, and now `mixin` of Pug comes in handy. However, something goes wrong for my mixin, and I can only display one button. It is about iteration?

I am not slacking off in office when the boss is not around, I am working hard on `mixin` ~ !

**Link(s) to work** [freeCodeCamp - draft portfolio page - Pug draft](code/2017-06-29_greenFolio_draft.pug)

### Day 24: 2017-06-30 (Friday)

**Today's Progress** Refine Pug draft of freeCodeCamp portfolio and Adjust social buttons

**Thoughts**

I look at the compiled html code of Pug and all the buttons can be displayed now. It seems that buttons have to be places in a _row_ e.g. `<a></a><a></a><a></a>` = 3 buttons, not in a container. After removing the `div.container` in `mixin`, everything goes well.

Hmmmm maybe it's time to standardize my page, like setting standard format for `h2` `section` etc. Hope this can make my portfolio more _modular_ i.e. I can reuse the css for my next portfolio for real.

**Link(s) to work**
1. [freeCodeCamp - draft portfolio page - Pug draft](code/2017-06-30_greenFolio_draft.pug)
2. [freeCodeCamp - draft portfolio page - CSS draft](code/2017-06-30_greenFolio_draft.css)

> I spend the whole day having fun with my buddy outdoor. I don's think this will count towards my 100 days of code.

### Day 25: 2017-07-02 (Sunday)

**Today's Progress** Refine Pug draft of freeCodeCamp portfolio and Rewrite project cards by `mixin`

**Thoughts** This finalizes the structure of my portfolio page. `Mixin` saves a lot of typing. Should try to use `mixin` to compile uniform and tidy code for `carousel`, `navbar` and even formatting sections for sites.

**Link(s) to work** [freeCodeCamp - draft portfolio page](https://codepen.io/newbiegreen4ever/pen/EXXXKz)

### Day 26: 2017-07-03 (Monday)

**Today's Progress** Reflect on my progress

**Thoughts** Keep thinking about what I should learn. Finally come up with a few wanted items for 2017 and draw a pencil sketch

**Link(s) to work** N.A.

### Day 27: 2017-07-04 (Tuesday)

**Today's Progress** Reflect on my progress

**Thoughts** Keep thinking about what I should learn. Amend my pencil sketch

**Link(s) to work** N.A.

### Day 28: 2017-07-05 (Wednesday)

**Today's Progress** Finalize freeCodeCamp portfolio and Finish some freeCodeCamp Intro to JS exercises

**Thoughts** It is difficult to appear approachable and professional. Try to create a sample portfolio that will cheer up my future self after 1 - 2 years. Start working on JS right away.

**Link(s) to work** [freeCodeCamp sample portfolio](https://codepen.io/newbiegreen4ever/pen/EXXXKz)

### Day 29: 2017-07-06 (Thursday)

**Today's Progress** Finish some freeCodeCamp Intro to JS exercises and Revise how to manipulate elements in an array

**Thoughts**

The easiest way to add an element to an array should be assigning a value to its elements.
`var array = []; // create an empty array
 array[0] = 1; // add the 0th element
 array[1] = 3; // add the 1st element
 return array; // [1, 3]
`
Don't have to go for `array.push(3)`, `array.unshift(1)` every time.

Common ways to manipulate arrays
`array.push(1); // add 1 as its last element
 array.pop(); // remove its last element
 array.shift(); // remove its first element
 array.unshift(1); // add 1 as its first element
`
**Link(s) to work** N.A.

### Day 30: 2017-07-07 (Friday)

**Today's Progress** Finish some freeCodeCamp Intro to JS exercises and Draw Tuesday pencil sketch in Google Drawings

**Thoughts**

JS NB

1. switch
  `switch (x) {
    case condition1:
    [action];
    break; // break from this case, such that you may move on to the next case
    case condition2:
    [action];
    break; // break from this case
    case condition3:
    [action];
    break; // break from this case
    default
    [action];
    break;
  }`

2. if-else conditional
  `if ([condition1]) {
    [action 1]
    } else if ([condition2]) {
      [action 2]
      } else {
        [action 3]
        }`

3. =? ==?
  `x = a`   assign a to x
  `x == a`  compare a with x, often in conditional

4. return
  `return a > b` this returns a boolean, if a > b, then true, else false.

5. object[prop]? object.prop
  `object[prop]` 'prop' may be a variable, if `prop = address`, return object.address
  `object.prop` if `prop = address`, return `undefined`. Dot notation can only be used for iterating properties of object

6. random(max, min)
  random(max, min)
  = Math.floor(Math.random() * (max - min + 1)) - min

**Link(s) to work** [Building Blocks 2017](https://docs.google.com/drawings/d/1gSpXkKseB9XYAsUa0IBNH4fZtOSFXveREDg8pZx188Q/edit?usp=sharing)

### Day 31: 2017-07-08 (Saturday)

**Today's Progress** Finish freeCodeCamp Intro to JS exercises and Start freeCodeCamp Intro to Algo exercises

**Thoughts** I am not familiar with string... I need to check hints quite often for string questions. This max number array is the first question solved without peeping hints.

**Link(s) to work** [freeCodeCamp Intro to Algo](code/2017-07-08_fccAlgo.js)
