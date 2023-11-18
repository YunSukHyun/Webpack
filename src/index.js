import generateJoke from "./generateJoke";
import "./styles/main.scss";
import sad from "./assets/sad.png";

const sadImg = document.getElementById("sadImg");
sadImg.src = sad;
console.log(generateJoke());
