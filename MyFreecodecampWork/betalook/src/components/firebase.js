// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {auth} from " firebase/app";

// export const app = firebase.initializeApp({
//     apiKey: "AIzaSyDh8cBp4DsIkYq_NI8p4uUmxot83eg5HrE",
//     authDomain: "wogumoh.firebaseapp.com",
//     projectId: "wogumoh",
//     storageBucket: "wogumoh.appspot.com",
//     messagingSenderId: "515224582728",
//     appId: "1:515224582728:web:6e41796c851df07f0b767d"
//   }).auth();
const firebaseConfig = {
  apiKey: "AIzaSyDh8cBp4DsIkYq_NI8p4uUmxot83eg5HrE",
  authDomain: "wogumoh.firebaseapp.com",
  projectId: "wogumoh",
  storageBucket: "wogumoh.appspot.com",
  messagingSenderId: "515224582728",
  appId: "1:515224582728:web:6e41796c851df07f0b767d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export { auth, app };
