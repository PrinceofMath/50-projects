const url = "https://icanhazdadjoke.com/";
const btn = document.getElementById("btn");
const jokeElement = document.getElementById("joke");

btn.addEventListener("click", generatejoke);
generatejoke();

function generatejoke() {
  {
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        jokeElement.innerHTML = data.joke;
      });
  }
}
