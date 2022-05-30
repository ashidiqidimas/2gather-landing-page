import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-HaCcUvm2UJmMLHpFT_I13f-R2hydCJc",
    authDomain: "pre-register-2gather.firebaseapp.com",
    databaseURL: "https://pre-register-2gather-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pre-register-2gather",
    storageBucket: "pre-register-2gather.appspot.com",
    messagingSenderId: "262525794068",
    appId: "1:262525794068:web:979a16004f51a9aa2fb401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("sign-up-form").addEventListener("submit", submitForm);

async function submitForm(e) {
    e.preventDefault();

    var username = getElementVal("fUsername");
    var email = getElementVal("fEmail");

    console.log(username, email);
    try {
        const docRef = await addDoc(collection(db, "username"), {
            username: username,
            email: email,
        });
        console.log("Document written with ID: ", docRef.id, " and value: ", username, email);
        alert("success")
    } catch (e) {
        alert("Error adding document: ${e}");
        console.error("Error adding document: ", e);
    }
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
