//https://icanhazdadjoke.com/
const jokes = document.getElementById("jokes");
const btn = document.getElementById("jokesbtn");

btn.addEventListener("click", getJokes);



async function getJokes(){
    const configJokes = {
        headers: {
            Accept: "application/json",
        },
    };

    const res = await fetch("https://icanhazdadjoke.com/",configJokes);
    const data = await res.json();
    jokes.innerText = data.joke;
}