
var firebaseConfig = {
    apiKey: "AIzaSyDmWvLY6W0H4-HKgkj4oxgao1ofsCJn3xw",
    authDomain: "tuchat-c2c57.firebaseapp.com",
    databaseURL: "https://tuchat-c2c57.firebaseio.com",
    projectId: "tuchat-c2c57",
    storageBucket: "tuchat-c2c57.appspot.com",
    messagingSenderId: "828414719935",
    appId: "1:828414719935:web:7eb29841f7af1a9140930a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
//var database = firebase.database();
var db = firebase.firestore();

function register() {

    compara();

    let email = document.getElementById('email').value;
    let password = document.getElementById('inputPass').value;
    let vName = document.getElementById('inTxtName').value;
    let vLastName = document.getElementById('inTxtLastName').value;
    let vEmail2 = document.getElementById('inTxtEmail2').value;
    let vUserName = document.getElementById('inTxtUserName').value;
    let vGender = document.getElementById('inTxtGender').value;
    let vBird = document.getElementById('inTxtBird').value;
    let vPhone = document.getElementById('inTxtPhone').value;

    //console.log("se activo el evento onclick");
    //console.log('email ${email}');
    //console.log($('#inTxtPhone').val());

    firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {

        db.collection("users").add({
            name: vName,
            lastname: vLastName,
            email1: email,
            email2: vEmail2,
            username: vUserName,
            pass: password,
            gender: vGender,
            bird: vBird,
            phone: vPhone,
            aboutMe: "",
            photo: ""
        }).then(function (docRef) {
            //console.log("Document written");

            alert("Registro Exitoso! sera enviado a la pagina de inicio...");

            document.getElementById('email').value = "";
            document.getElementById('inputPass').value = "";
            document.getElementById('InputRepass').value = "";
            document.getElementById('inTxtName').value = "";
            document.getElementById('inTxtLastName').value = "";
            document.getElementById('inTxtEmail2').value = "";
            document.getElementById('inTxtUserName').value = "";
            document.getElementById('inTxtGender').value = "";
            document.getElementById('inTxtBird').value = "";
            document.getElementById('inTxtPhone').value = "";

            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                console.log("Deslogueo exitoso");
            }).catch(function (error) {
                console.log("Error deslogueando usuario");
                // An error happened.
            });

            window.location = "index.html";

        })
            .catch(function (error) {
                alert("Ocurrio un error al insertar el registro", error);
                console.error("Error adding document: ", error);
            });

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error code ${errorCode}');
        console.log('Error message ${errorMessage}');
        // ...
    });



}

function login() {

    let email = document.getElementById('InputEmailLg').value;
    let password = document.getElementById('InputPassLg').value;


    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {

        document.getElementById('InputEmailLg').value = '';
        document.getElementById('InputPassLg').value = '';
        alert('Usuario logueado');
        window.location = "perfil.html";
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Error iniciando sesion o datos incorrectos');
        // ...
    });

}

function save() {

}

function comprobar_user() {

    var user = firebase.auth().currentUser;

    if (user) {
        // User is signed in.
        alert("el usuario que esta logeado es: ", user);
    } else {
        alert("no hay ningun usuario logueado");
        // No user is signed in.
    }
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("existe un usuario logueado: " + user.email + " uid: " + user.uid);
        cargaFoto();
        //window.location = "perfil.html";
        // User is signed in.
    } else {
        console.log("no existe un usuario logueado");
        // No user is signed in.
    }
});

function logOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log("Deslogueo exitoso");
        alert("deslogueo exitoso... redireccionando a la pagina principal");
        window.location = "index.html";
    }).catch(function (error) {
        console.log("Error deslogueando usuario");
        // An error happened.
    });
}

/*function obtenerPerfil() {

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }

    //console.log(user);
}*/

function subirFoto() {
    var user = firebase.auth().currentUser;
    const ref = firebase.storage().ref();
    const file = document.querySelector("#foto").files[0];
    //const name = new Date() +'-'+ file.name
    //const name = user.email+".jpg";
    const name = user.email;

    if (file == null) {
        alert("debe seleccionar una imagen...");
    } else {
        alert('Subiendo foto');
        const metadata = {
            contentType: file.type

        }

        const task = ref.child(name).put(file, metadata)



        task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
            console.log(url);
            alert('Imagen subida exitosamente');
            const imageElement = document.querySelector("#Image");
            imageElement.src = url;
        })
    }

    console.log(ref);
}


function cargaFoto() {

    const ref = firebase.storage().ref();
    var user = firebase.auth().currentUser;
    console.log('cargando foto');
    ref.child(user.email).getDownloadURL().then(function (url) {
        // Or inserted into an <img> element:
        var img = document.querySelector("#Image");
        img.src = url;
    }).catch(function (error) {
        // Handle any errors
        ref.child("default-user.jpg").getDownloadURL().then(function (url) {
            // Or inserted into an <img> element:
            var img = document.querySelector("#Image");
            img.src = url;
        }).catch(function (error) {
            // Handle any errors
        });
    });
}

function borrarFoto() {
    // Create a reference to the file to delete
    var user = firebase.auth().currentUser;
    var refu = firebase.storage().ref();
    var refa = refu.child(user.email);

    // Delete the file
    refa.delete().then(function () {
        alert("imagen eliminada exitosamente!");
        refu.child("default-user.jpg").getDownloadURL().then(function (url) {
            // Or inserted into an <img> element:
            var img = document.querySelector("#Image");
            img.src = url;
        }).catch(function (error) {
            // Handle any errors
        });
        // File deleted successfully
    }).catch(function (error) {
        alert('Error eliminando imagen!');
        // Uh-oh, an error occurred!
    });

}

function passReset() {

    if (document.getElementById("InputEmailLg").value) {
        alert("debe digitar un correo para solicitar reestablecimientode contrasena");
        console.log("campo email nulo");
        //return false;
    } else {

        var auth = firebase.auth();
        var emailAddress = document.getElementById("InputEmailLg").value;

        auth.sendPasswordResetEmail(emailAddress).then(function () {
            alert('Se ha enviado un email de reestablecimiento de contrasena a su correo ' + emailAddress);
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });
    }
}