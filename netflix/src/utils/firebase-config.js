// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBACJhyh_a1QBXRNKcVmE5--7COcrXdnf4",
  authDomain: "netflix-60879.firebaseapp.com",
  projectId: "netflix-60879",
  storageBucket: "netflix-60879.appspot.com",
  messagingSenderId: "253996829139",
  appId: "1:253996829139:web:014e81e75255b73c6d0726",
  measurementId: "G-S2PYM8QYF8"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);