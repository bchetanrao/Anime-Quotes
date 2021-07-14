fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => {
            console.log(quote);
            document.getElementById("anime").innerHTML = quote.anime;
            document.getElementById("quote").innerHTML = quote.quote;
            document.getElementById("character").innerHTML = quote.character;
        })
