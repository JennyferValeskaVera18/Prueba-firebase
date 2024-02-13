import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import {showMessage} from "./show_message.js";
//Obtenemos el form con ese Id
const signupForm = document.getElementById('signup-form');
console.log(signupForm);

//Agregamos el evento al mandar el form
signupForm.addEventListener('submit', async (e) => {
    //Para prevenir que la página se recargue
    e.preventDefault();

    //Accedemos a los elementos con 
    const email = signupForm['email-signup'].value;
    const password = signupForm['password-signup'].value;

    //console.log(email, password);

try {
    //Obtener las credenciales de forma asincrona
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(credentials);
//OCULTAR MODAL
    const signupModal =document.getElementById("signup-modal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    signupForm.reset();
    modal.hide();
}


//Manejo de errores
catch (error) {
    //console.log(error);
    
    if(error.code === "auth/email-already-in-use") {
        showMessage("Email already in use", "red") //coloco los argumentos de las variables de la función
    }
    else if (error.code === "auth/invalided-email") {
        //alert("Email invalided");
        showMessage("Email invalided", "red")
    }
    else if (error.code === "auth/weak-password") {
        //alert("Weak password");
        showMessage("Weak password", "red")
    }
    else {
        //alert("Something went wrong :( ");
        showMessage("Something went wrong", "red")
    }
}
});