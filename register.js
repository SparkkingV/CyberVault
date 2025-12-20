import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBS4wPW29mLZtYgbSw-J4ZL7onmZIW9h5M",
  authDomain: "private-server-1106.firebaseapp.com",
  projectId: "private-server-1106",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("registerBtn").addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      sendEmailVerification(cred.user).then(() => {
        alert("Verification email sent! Check your inbox.");
        window.location.href = "verify.html";
      });
    })
    .catch(err => alert(err.message));
});
