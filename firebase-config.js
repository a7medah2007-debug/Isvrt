  
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyDp4vlXfdLLG-7LDydtaG1li71gz64VnjI",
  authDomain: "isvrt-2026.firebaseapp.com",
  projectId: "isvrt-2026",
  storageBucket: "isvrt-2026.firebasestorage.app",
  messagingSenderId: "759775854981",
  appId: "1:759775854981:web:343abc4affd8dcf383c4ec",
  measurementId: "G-68Q9BVZ2Y2"
};
 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);