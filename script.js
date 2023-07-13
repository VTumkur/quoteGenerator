const quoteContainer = document.getElementById('container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//Showing New Quote 
function newQuote() {
    //Picking a random quote from apiQuote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   //checking if the author is nulland replace it with 'Unknown'
   if(!quote.author){
        authorText.textContent = 'Unknown';
   } else {
        authorText.textContent = quote.author;   
   }

   //check quote length to determine styling 
    if(quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quote.classList.remove('long-quote');
    }
    
    quoteText.textContent = quote.text;
}

//for fetching the data locally 
// function newQuote() {
//     //Picking a random quote from apiQuote array
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }

// Get quotes from API 
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error){
        //Handle catch error
    }
}

//On Load
getQuotes();