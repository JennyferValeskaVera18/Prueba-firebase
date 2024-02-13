import { GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"

const googleButton = document.getElementById("google_login");

googleButton.addEventListener("click", async() => {
    const provider = new GoogleAuthProvider(); //New es de programación orientada a objetos

    //Para forzar la selección de cuenta si no nos deja
    provider.setCustomParameters({
        prompt: "select_account" ,
    })

    try {
        const credentials = await signInWithPopup(auth, provider);

        const signinModal =document.getElementById("signin-modal");
        const modal = bootstrap.Modal.getInstance(signinModal);
        modal.hide();


    }
    catch(error) {
        console.log(error);
    }
})




