import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKcIGda5orwayHPXeBN5A6Jw6AEEYNctQ",
  authDomain: "ghardekho-7e6a4.firebaseapp.com",
  projectId: "ghardekho-7e6a4",
  storageBucket: "ghardekho-7e6a4.firebasestorage.app",
  messagingSenderId: "274370806876",
  appId: "1:274370806876:web:9d281c57eef92c3bb49299",
  measurementId: "G-156MT8S28C"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Setup reCAPTCHA
export const setUpRecaptcha = (phone) => {
  const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });

  return signInWithPhoneNumber(auth, phone, verifier);
};
