//Para almacenar todo lo que se verá al entrar y al salir 
import { showMessage } from "./show_message.js";

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

export const loginCheck = user => {
    //Si el usuario existe, ocultamos los btns necesarios
    if (user) {
       loggedInLinks.forEach(link => link.style.display = "block");
       loggedOutLinks.forEach(link => link.style.display = "none");
       showMessage("Logged in successfully" , "green")
    }
    else{
        loggedInLinks.forEach(link => link.style.display = "none");
        loggedOutLinks.forEach(link => link.style.display = "block");
        showMessage("Logged out successfully" , "orange")
    }
}