import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import {showMessage} from "./show_message.js";
//Obtenemos el form con ese Id
const signinForm = document.getElementById('signin-form');
console.log(signinForm);

//Traemos el form necesario
signinForm.addEventListener("submit", async (e) => {
    //Para evitar que la página serecargue(Evento por defecto)
    e.preventDefault();

    //Accedemos a los elementos con notación de corchetes
    const email = signinForm['email-signin'].value;
    const password = signinForm['password-signin'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);

        //OCULTAR MODAL
        const signinModal =document.getElementById("signin-modal");
        const modal = bootstrap.Modal.getInstance(signinModal);
        signinForm.reset();
        modal.hide();
    }
    catch (error) {
        //console.log(error);
    
    if(error.code === "auth/wrong-password") {
        showMessage("Wrong password", "red") //coloco los argumentos de las variables de la función
    }
    else if (error.code === "auth/user-not-found") {
        //alert("Weak password");
        showMessage("User not found", "red")
    }
    else {
        //alert("Something went wrong :( ");
        showMessage("Something went wrong", "red")
    }
    }
})