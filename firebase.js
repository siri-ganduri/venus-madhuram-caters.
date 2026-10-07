// Import Firebase modules using direct CDN URLs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBsTmb822ZboyeenwgtExVEQB4wuwG33eM",
  authDomain: "maduram-caters.firebaseapp.com",
  projectId: "maduram-caters",
  storageBucket: "maduram-caters.firebasestorage.app",
  messagingSenderId: "266426532113",
  appId: "1:266426532113:web:3656367f37a2fea82e4cb0",
  measurementId: "G-5TTEV6QP2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore database instance
export const db = getFirestore(app);