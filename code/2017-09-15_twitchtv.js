//https://codepen.io/newbiegreen4ever/pen/BwNZKL?editors=1111 
(function() {
$(document).ready(function(){
    var following = [];
    getFccStatus();
    getFollows();
    getChannelsData();
    getFeaturedStreamData();
  
    // freecodecamp status
    function getFccStatus () {
        let url = 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?';
        $.getJSON(url, function(data) {
            if (data.stream === null) {
              $("#fccStatus").html("FreeCodeCamp is OFFLINE.");
            } else {
              $("#fccStatus").html("FreeCodeCamp is ON AIR.");
            }
        });
    }

    function getFollows () {
        let url = 'https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels?callback=?'
        $.getJSON(url, function(data) {
            
            let length = data.follows.length;
            for (i = 0; i < length; i++) {
                let displayName = data.follows[i].channel.display_name;
                following.push(displayName); 
            }
            following.push('hardlydifficult');
            following.push('shroud');
            following.push('callowcreation');
            following.push('serpent_ai');



            let lengthf = following.length;
            for (i = 0; i < lengthf; i++) {
                let urlf = 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i] + '?callback=?';
                $.getJSON(urlf).done(function (data) {
                    var logo;
                    var status;
                    var name;
                    if (data.error){
                        console.log(url2); 
                    }
                
                });
            }
            //console.log(following); 
        });
        
        
    }

    // featured channels
    function getFeaturedStreamData () {
        let url =  "https://wind-bow.gomix.me/twitch-api/streams/featured?callback=?";
        let titleFeatured = [];
        let urlFeatured = [];
        let linkFeatured = [];
        
        $.getJSON(url, function(data) {
            let length = data.featured.length;
            for (i = 0; i < length; i++) {
            titleFeatured.push(data.featured[i].title);
            urlFeatured.push(data.featured[i].stream.channel.url);
            linkFeatured.push("<li><a href='" + urlFeatured[i] + "' target='blank'>" + titleFeatured[i] + "</a></li>"); 
            }
            // console.log(urlFeatured);
            // console.log(linkFeatured);
            $("#featured").html(linkFeatured.join("<br>"));  
        });
    }

  
    //following
    function getChannelsData () {
        let url = 'https://wind-bow.gomix.me/twitch-api/channels/';

        let accounts = ['freecodecamp', 'shroud', 'serpent_ai', 'callowcreation', 'rw_grim'];
        let urlFollowing = [];
        let logoFollowing = [];

        let length = accounts.length;
        for (i = 0; i < length; i++) {
            urlFollowing.push(url + accounts[i] + "?callback=?");

            $.getJSON(urlFollowing[i], function(data) {
              $("#logo").append("<img src='" + data.logo + "' class='img-circle' width='300' height='300'>");
              $("#name").append("<h1><row>" + data.name + "</row><h1>");
            });
        }
        // console.log(urlFollowing);
    }
            
});
})();
 
  





