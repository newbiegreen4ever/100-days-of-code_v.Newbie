// URL: https://codepen.io/anon/pen/adYBVO
// A PEN BY CAPTAIN ANONYMOUS

var quotes = [
  { text: "She got a big booty so I call her big booty", author: '2Chainz'}, 
  { text: "fjdkaljfdksla", author: 'bhd'}, 
  { text: "fdhafjdahaa", author: 'fndun'},
  { text: "fjdkfjsdkfjdsiojdsvndio", author: 'fvdsw'}
]


// Returns a random quote
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  
  return quotes[randomNumber]
}

// Create tweet button from text
function createTweetButton( text ) {
  twttr.widgets.createShareButton(
    'https://twitter.com/share', // url : string 
    document.getElementById('twitter-button'), // targetEl : DOM node
    {
      text: text
    }  // options : object
  );
};
    
// Generates tweet text and creates button
function createTweetButtonFromQuote( quote ) {
  var tweetText = (quote.text+ " -" + quote.author);
  
  createTweetButton( tweetText )
};


// On clicking new quote button, get a random quote, then generate a tweet button to share the quote.
$("#newQuote").click(function() {
  var quote = getRandomQuote();
  
  $("#quote").html(quote.text);
  $("#author").html(" -" + quote.author);
  $("#twitter-button").empty();
  
  createTweetButtonFromQuote( quote );
});








