// Import the functions you need from the SDKs you need
//https://firebase.google.com/docs/auth/web/start?authuser=0&hl=en#web-modular-api
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCTQSYu-quHEIZBgj7pBiuWifW6w-BIoxg',
  authDomain: 'edufun-1fb77.firebaseapp.com',
  projectId: 'edufun-1fb77',
  storageBucket: 'edufun-1fb77.appspot.com',
  messagingSenderId: '186085205492',
  appId: '1:186085205492:web:2f1e4b819f6f56067bc5a1',
  measurementId: 'G-S9Y3V30C29',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);

// Submit button
const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert('Creating Account...');
      window.location.href = 'index.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
