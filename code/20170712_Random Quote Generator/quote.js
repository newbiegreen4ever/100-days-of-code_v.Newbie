/* URL: https://codepen.io/anon/pen/adYBVO
 * A PEN BY CAPTAIN ANONYMOUS, my main javaScript reference.
 */

var quotes = [
  { text: "Any idiot can put up a website.", author:  'Patricia Briggs'},
  { text: 'Science and technology revolutionize our lives, but memory, tradition and myth frame our response.', author: 'Arthur M. Schlesinger'},
  { text: "We're losing track of the vastness of the potential for computer science. We really have to revive the beautiful intellectual joy of it, as opposed to the business potential.", author: 'Jaron Lanier'},
  { text: 'Computers are like Old Testament gods; lots of rules and no mercy.', author: 'Joseph Campbell'},
  { text: 'Man is a slow, sloppy, and brilliant thinker; computers are fast, accurate, and stupid.', author: 'John Pfeiffer'},
  { text: 'Science is a way of thinking much more than it is a body of knowledge.' , author: 'Carl Sagan'},
  { text: 'Science is a differential equation. Religion is a boundary condition.', author: 'Alan Turing'},
  { text: 'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.', author: 'Ada Byron'},
  { text: 'A year spent in artificial intelligence is enough to make one believe in God.', author: 'Alan Perlis'},
  { text: 'The proper study of mankind is the science of design.', author: 'Herbert Simon'},
  { text: "We're not a vocational school. If someone wants to get a high-paying job, I would hope that there are easier ways to do it than working through a formal computer science curriculum.", author: 'Philip Greenspun'},
  { text: 'Both the man of science and the man of action live always at the edge of mystery, surrounded by it', author: 'J. Robert Oppenheimer'}
]

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Generates tweet text and creates button
function createTweetButton( text ) {
  twttr.widgets.createShareButton(
  ' ', // url : string
    document.getElementById('twitter-button'), // targetEl : DOM node
    {
      text: text
    }  // options : object
  );
};


// On clicking new quote button, get a random quote, then generate a tweet button to share the quote.
function createTweetButtonFromQuote( quote ) {
  var tweetText = (quote.text+ "\n" + " ———— " + quote.author);

  createTweetButton( tweetText )
};

$("#newQuote").click(function() {
  var quote = getRandomQuote();

  $("#quote").html(quote.text);
  $("#author").html(" ———— " + quote.author);
  $("#twitter-button").empty();

  createTweetButtonFromQuote( quote );
});
