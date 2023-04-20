
const fetchAdvice = async()=>{
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    let data = await response.json();
    return data;
    }

async function rollAdvice(){
    const data = await fetchAdvice();

    let adviceNumber = document.getElementById("advice-number");
    let adviceQuote = document.getElementById("advice-quote");
    
    adviceNumber.innerHTML = `${data.slip.id}`;
    adviceQuote.innerHTML = `${data.slip.advice}`;

};

rollAdvice();

