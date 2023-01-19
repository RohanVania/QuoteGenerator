
const quote=document.getElementById("quote");

const author=document.querySelector(".quote-author")
const btn=document.querySelector(".button-quote");

const volumebtn=document.querySelector(".volume");
const copybtn=document.querySelector(".copy");
const twitterbtn=document.querySelector(".twitter");

let paratwitter=document.querySelector(".quote-para");



btn.addEventListener("click",randomquote)

let api='https://api.quotable.io/random';
function randomquote(){

    btn.classList.add("loading");
    btn.innerText="Loading Quote..."
    // Fetching PROMISE THROGH API 
    // and then resolving in into json which also retursn promise 
    // them displaying in the api data

    fetch(api).
    then(response=>response.json()).
    then((data)=>{
        quote.innerText=data.content;
        author.innerHTML=" - "+data.author;
        btn.innerText="New Quote";
        btn.classList.remove("loading");
        
    })
   
}

// Twitter Js
twitterbtn.addEventListener("click",()=>{
    let tweeturl=`https://twitter.com/intent/tweet?text=${paratwitter.innerText}`;
    window.open(tweeturl)
})

// Speech JS
volumebtn.addEventListener("click",()=>{
    let utterance=new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`)
   speechSynthesis.speak(utterance)
})

// Copy Js
copybtn.addEventListener("click",()=>{
navigator.clipboard.writeText(quote.innerText);
})