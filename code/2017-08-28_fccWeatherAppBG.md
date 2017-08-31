  Weather    |   Photographer   | jQuery
:----------: | :--------------: | :-------------------------------------------------------------------------------------------
   Clear     |  Michael Podger  | $("body").css("background-image","url(https://source.unsplash.com/kx3I84FtfCc/1600x900)");
   Clouds    |  Nathan Dumlao   | $("body").css("background-image","url(https://source.unsplash.com/OHzkfrv9Ycw/1600x900)");
  Drizzle    | Caroline Grondin | $("body").css("background-image","url(https://source.unsplash.com/w7wA3YQgxUQ/1600x900)");
    Rain     | Eutah Mizushima  | $("body").css("background-image","url(https://source.unsplash.com/F-t5EpfQNpk/1600x900)");
Thunderstorm |  Breno Machado   | $("body").css("background-image","url(https://source.unsplash.com/in9-n0JwgZ0/1600x900)");
    Snow     |     Kalle K      | $("body").css("background-image","url(https://source.unsplash.com/7JUEYVOu0/1600x900)");
  Default    |   Sam Schooler   | $("body").css("background-image","url(https://source.unsplash.com/E9aetBe2w40/1600x900)");


displayBG

```
  function displayBG(weatherType) {
    let imageURL = "";
    if (weatherType === "Clear") {
      imageURL += "url(https://source.unsplash.com/kx3I84FtfCc/1600x900)";
    } else if (weatherType === "Clouds") {
      imageURL += "url(https://source.unsplash.com/OHzkfrv9Ycw/1600x900)";
    } else if (weatherType === "Drizzle") {
      imageURL += "url(https://source.unsplash.com/w7wA3YQgxUQ/1600x900)";
    } else if (weatherType === "Rain") {
      imageURL += "url(https://source.unsplash.com/F-t5EpfQNpk/1600x900)";
    } else if (weatherType === "Thunderstorm") {
      imageURL += "url(https://source.unsplash.com/in9-n0JwgZ0/1600x900)";
    } else if (weatherType === "Snow") {
      imageURL += "url(https://source.unsplash.com/7JUEYVOu0/1600x900)";
    } else {
      imageURL += "url(https://source.unsplash.com/E9aetBe2w40/1600x900)";
    }
    $("body").css("background-image", imageURL);
  }
```

Credit Footer

```
<footer class="site-footer"><div class="text-center">I wish to extend my thanks to the following for their great help.</div><br>
  <table class="">
  <tr>
    <th class=""></th>
    <th class=""></th>
    <th class=""></th>
  </tr>
  <tr>
    <td class="">Coding Support  </td>
    <td class="">--------------  </td>
    <td class=""><a href="https://www.freecodecamp.org/challenges/show-the-local-weather">FreeCodeCamp</a></td>
  </tr>
  <tr>
    <td class=""></td>
    <td class="">--------------</td>
    <td class=""><a href="https://www.youtube.com/watch?v=eLK28VPJvCE&list=PLHdCowjFIBmLRvwkK0UNz0OA10pYI4H0g&index=1">CodingTutorials360</a></td>
  </tr>
  </tr>
  <tr>
    <td class="">Background Images</td>
    <td class="">--------------</td>
    <td class=""><a href="https://unsplash.com">Unsplash</a></td>
  </tr>
  <tr>
    <td class=""></td>
    <td class="">--------------</td>
    <td class="">Photographer: <a href="https://unsplash.com/@nate_dumlao">Dumlao, Nathan</a></td>
  </tr>
  <tr>
    <td class=""></td>
    <td class="">--------------</td>
    <td class="">Photographer: <a href="https://unsplash.com/@caroline_grondin">Grondin, Caroline</a></td>
  </tr>
  <tr>
    <td class=""></td>
    <td class="">--------------</td>
    <td class="">Photographer: <a href="https://unsplash.com/@kallek">K, Kalle</a></td>
  </tr>
  <tr>
    <td class=""></td>
    <td class="">--------------</td>
    <td class="">Photographer: <a href="https://unsplash.com/@brenomachado">Machado, Breno</a></td>
  </tr>
  <tr>
    <td class=""></td>
    <td class="">--------------</td>
    <td class="">Photographer: <a href="https://unsplash.com/@eutahm">Mizushima, Eutah</a></td>
  </tr>
  <tr>
    <td class=""></td>
    <td class="">--------------</td>
    <td class="">Photographer: <a href="https://unsplash.com/@sam">Schooler, Sam</a></td>
  </tr>
  <tr>
    <td class="">CSS</td>
    <td class="">--------------</td>
    <td class="">CodePen</td>
  </tr>
  <tr>
    <td class=""></td>
    <td class="">--------------</td>
    <td class=""><a href="https://codepen.io/chriscoyier/pen/uwJjr">Chris Coyler</a></td>
  </tr>
</table>
<div class="text-center">Coded by <name>Newbie Green</name> in late August 2017</div>
</footer>
```
