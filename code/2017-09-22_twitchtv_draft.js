// reference: https://stackoverflow.com/questions/18851619/saving-ajax-response-to-array-with-jquery

$(document).ready(function() {
var freecodecampC = [];
var freecodecampS = [];

var urlC = "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?";
var urlS = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?";

function getChannelInfo () {
  $.ajax({
    async: true,
    type: "GET",
    url: urlC,
    dataType: "json",
    success : function(dataC) {
      freecodecampC.push(dataC.display_name);
      freecodecampC.push(dataC.name);
      freecodecampC.push(dataC.logo);      
    }
  });
  return freecodecampC;
}

function getStreamInfo () {
  $.ajax({
    async: true,
    type: "GET",
    url: urlS,
    dataType: "json",
    success : function(dataS) {
      if (dataS.stream === null) {
        freecodecampS.push('OFFLINE');
        freecodecampS.push('no streaming');
      } else {
        freecodecampS.push('ONLINE');
        freecodecampS.push(dataS.stream.channel.status);
      }
    }
  });
    return freecodecampS;
  }

getChannelInfo();
getStreamInfo();

$(document).ajaxComplete(function() {
  console.log(freecodecampC);
  console.log(freecodecampS);
});
  
});




