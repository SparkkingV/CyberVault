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

document.getElementById("regbutton").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Fill all fields");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      sendEmailVerification(cred.user).then(() => {
        alert("Verification email sent!");
        window.location.href = "index.html";
      });
    })
    .catch((err) => alert(err.message));
});
