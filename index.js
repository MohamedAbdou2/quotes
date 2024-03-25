
let newQuoteBtn = document.getElementById('quoteBtn');
let content = document.getElementById('content');

let quotesContainer = [
    {quote:"Resentment is like drinking poison and waiting for your enemies to die.",author:"--Nelson Mandela"},
    {quote:"It's not what happens to you, but how you react to it that matters.",author:"--Epictetus"},
    {quote:"The best revenge is massive success.",author:"--Frank Sinatra"},
    {quote:"Do not take life too seriously. You will not get out alive.",author:"--Elbert Hubbard"},
    {quote:"The best revenge is massive success.",author:"--Frank Sinatra"}
]

newQuoteBtn.addEventListener('click',function(){
    let randomIndex = Math.floor(Math.random() * quotesContainer.length);
    content.innerHTML=`
    <h2>${quotesContainer[randomIndex].quote}</h2>
    <h2>${quotesContainer[randomIndex].author}</h2>`;
  
    
})



