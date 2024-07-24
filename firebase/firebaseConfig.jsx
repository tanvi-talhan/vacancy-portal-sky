import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmyLNKMBFtx9H6cr9TFhQAYXT5E7rIPo4",
  authDomain: "vacancy-portal-e5e55.firebaseapp.com",
  projectId: "vacancy-portal-e5e55",
  storageBucket: "vacancy-portal-e5e55.appspot.com",
  messagingSenderId: "640524029464",
  appId: "1:640524029464:web:242cab5db0b50d5f0d7d6d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;