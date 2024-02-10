import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase/firebase.js"
import { loginCheck } from "./firebase/login_check.js";

import "./firebase/signup_form.js"
import "./firebase/logout.js"

onAuthStateChanged(auth, async(user) => {
    //Si ha ingresado
    if(user) {
        //console.log("Entrar")
        loginCheck(user);
    }

    //Si ha salido
    else {
        //console.log("Salir")
        loginCheck(user);
    }
}) 