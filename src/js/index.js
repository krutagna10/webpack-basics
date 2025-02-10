import { greeting } from "./greeting.js";
import "../css/styles.css";
import odinImage from "../assets/odin.png";

console.log(greeting);

const image = document.createElement("img");
image.src = odinImage;
document.body.appendChild(image);
