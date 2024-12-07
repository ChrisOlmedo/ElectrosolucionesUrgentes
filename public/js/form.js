// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    databaseURL: "TU_DATABASE_URL",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Envíar formulario
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se recargue la página.

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    firebase.database().ref('contactos').push({
        nombre: name,
        correo: email,
        telefono: phone,
        mensaje: message
    }).then(() => {
        alert('Formulario enviado con éxito');
        form.reset(); // Limpia el formulario.
    }).catch((error) => {
        console.error('Error al enviar el formulario:', error);
    });
});