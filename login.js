window.login = function () {
  alert("Login button clicked");
};

// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS4wPW29mLZtYgbSw-J4ZL7onmZIW9h5M",
    authDomain: "private-server-1106.firebaseapp.com",
    projectId: "private-server-1106",
    storageBucket: "private-server-1106.firebasestorage.app",
    messagingSenderId: "236053385324",
    appId: "1:236053385324:web:6cb70704b0d925869fc849"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN FUNCTION (CORE LOGIC)
window.login = function () {

  //Get input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Send credentials to Firebase
  signInWithEmailAndPassword(auth, email, password)

    //login SUCCESS
    .then(() => {
      window.location.href = "dashboard.html";
    })

    //login FAILURE
    .catch((error) => {
      alert("Login Failed");
      console.log(error.message);
    });
};

