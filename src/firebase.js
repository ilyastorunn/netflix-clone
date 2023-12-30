import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW_tMnpi0gHH0A7tU-_rJVUg1eV3jfC1U",
  authDomain: "netflix-clone-a02f6.firebaseapp.com",
  projectId: "netflix-clone-a02f6",
  storageBucket: "netflix-clone-a02f6.appspot.com",
  messagingSenderId: "1003001894669",
  appId: "1:1003001894669:web:de84128816f57322080244",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;