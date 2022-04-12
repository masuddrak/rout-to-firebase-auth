// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMRf-Y0Iyp0SZWstjnWTJ74AeI__zovgo",
  authDomain: "milon-rout-auth.firebaseapp.com",
  projectId: "milon-rout-auth",
  storageBucket: "milon-rout-auth.appspot.com",
  messagingSenderId: "482860182169",
  appId: "1:482860182169:web:24042172eb723aa7922608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;