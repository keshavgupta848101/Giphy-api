// Abstracting out all the input and buttons from html page
const inputbox = document.getElementById('inputbox')
const Messagebox = document.getElementById('Messagebox')
const button = document.getElementById('button')
const gifButton = document.getElementById('button3');
let on = false;

// Beta api key
const api_key = 'dc6zaTOxFJmzC';

// eventlistner for gif button toggle
gifButton.addEventListener('click', ()=>{
    if(on){
        document.getElementById('inputbox').style.display = "none";
        on = false;
    }
    else{
        document.getElementById('inputbox').style.display = "";
        on = true;
    }
    
});

//This eventlistner is for input box and api call using fetch
button.addEventListener('click', async ()=> {
    const querryParams = inputbox.value.toString();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${querryParams}&limit=5&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    const data = await response.json();
    const imgurl = await data.data[0].images.downsized.url;
    const fig = document.createElement('figure');
    const fc = document.createElement('figcaption');
    const li = document.createElement('li');
    const imgTag = document.createElement('img');
    imgTag.src = imgurl;
    imgTag.alt = data.data[0].title;
    fc.textContent = Messagebox.value;
    fig.appendChild(imgTag);
    fig.appendChild(fc);
    li.appendChild(fig);
    document.getElementById('ul').appendChild(li)
    inputbox.value = '';
    Messagebox.value = '';
});