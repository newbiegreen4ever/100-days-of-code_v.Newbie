    (function() {
      document.getElementById("btn").onclick = showData;

      let channels = [freecodecamp, hardlydifficult, serpent_ai, callowcreation, rw_grim];

      function showData() {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            console.log(this.readyState);
            console.log(this.status);
            document.getElementById("output").innerHTML = JSON.parse(xhr.responseText);
          } else {
            console.log('Not ready yet.');
            console.log(this.readyState);
            console.log(this.status);
          }

        };

        let url = 'https://wind-bow.gomix.me/twitch-api/streams/';
        url += channels[0];

        console.log(url); 

        xhr.open('GET', url, true);
        xhr.send();

      }
    })();
