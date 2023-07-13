let apiQuotes = [];

// Get quotes from API 
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[1]);
    } catch(error){
        //Handle catch error
    }
}

//On Load
getQuotes();