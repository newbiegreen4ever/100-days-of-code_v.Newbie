
$(document).ready(function(){
  let api = "https://fcc-weather-api.glitch.me/api/current?";
  let weatherType = "";
  let tempC, tempF;
  
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lon = "lon=" + position.coords.longitude;
    let lat = "lat=" + position.coords.latitude;
    let lonDisplay = parseFloat(Math.round(position.coords.longitude * 100) / 100).toFixed(2);
    let latDisplay = parseFloat(Math.round(position.coords.latitude * 100) / 100).toFixed(2);
    $("#geolocation").html("geolocation<br>" + "latitude: " + latDisplay + "<br>longitude: " + lonDisplay);
    
    getWeather(lat, lon);
    displayBG(weatherType);
    tempSwap();
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
  
:IndentGuidesEnable
  function getWeather(lat, lon) {
    let apiURL = api + lat + "&" + lon;
    $.ajax({
      url: apiURL, success: function (result) {
        $("#country").text(result.sys.country);
        $("#city").text(result.name);
        
        weatherType += result.weather[0].main;
        $("#weather").text(result.weather[0].main);
        let imageURL = "";
        // console.log(weatherType);
        // weatherType = "Snow";
        // console.log(weatherType);
        if (weatherType == "Clear") {
          imageURL += "url(https://source.unsplash.com/kx3I84FtfCc/1600x900)";
        } else if (weatherType == "Clouds") {
          imageURL += "url(https://source.unsplash.com/OHzkfrv9Ycw/1600x900)";
        } else if (weatherType == "Drizzle") {
          imageURL += "url(https://source.unsplash.com/w7wA3YQgxUQ/1600x900)";
        } else if (weatherType == "Rain") {
          imageURL += "url(https://source.unsplash.com/F-t5EpfQNpk/1600x900)";
        } else if (weatherType == "Thunderstorm") {
          imageURL += "url(https://source.unsplash.com/in9-n0JwgZ0/1600x900)";
        } else if (weatherType == "Snow") {
          imageURL += "url(https://source.unsplash.com/7JtgUEYVOu0/1600x900)";
        } else {
          imageURL += "url(https://source.unsplash.com/E9aetBe2w40/1600x900)";
        }
        $("body").css("background-image", imageURL);
        
        
        tempC = result.main.temp.toFixed(2);
        tempF = (tempC * 1.8 + 32).toFixed(2);
        $("#temp").text(tempF + "°F");
        let swap = true;
        $("#temp").click(function(){
          if (swap === true) {
            $("#temp").html(tempC + "°C");
            swap = false;
          } else {
            $("#temp").html(tempF + "°F");
            swap = true;
          }
        });

        
        $("#humid").text("Humidity " + result.main.humidity + "%");
        $("#windSpeed").text("Wind Speed " + result.wind.speed + "m/s");
        $("#windDeg").text("Wind Degree " + result.wind.deg + "°");
        // IconGen(result.weather[0].main);
      }
    });
  }
// 華麗嘅分隔線，下面係我跟tutorial寫嘅，上面係我跟靚靚公式答案自己打嘅

  


               
//     } 
    
//   }
  
//   function checkTemp() {
//     if (tempC > 30) {
      
//     } else {
      
//     }
    
//   }
  
  
});

  
    


  

