// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQE3Iv8yeJHSS1jK4m471xNT3Hl638yUY",
  authDomain: "campus-recruitment-48015.firebaseapp.com",
  projectId: "campus-recruitment-48015",
  storageBucket: "campus-recruitment-48015.appspot.com",
  messagingSenderId: "566456111979",
  appId: "1:566456111979:web:fa4c83c801754ae9b8f22e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;