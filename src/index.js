import generateJoke from "./generateJoke";
import "./styles/main.scss";
import sad from "./assets/sad.png";

const sadImg = document.getElementById("sadImg");
sadImg.src = sad;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);
console.log(generateJoke());
