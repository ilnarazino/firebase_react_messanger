import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const appFire = initializeApp({
  apiKey: "AIzaSyBizYh2SsFoHN1VCWbI6OZBNx5kWRP3j0M",
  authDomain: "react-messanger-68a21.firebaseapp.com",
  projectId: "react-messanger-68a21",
  storageBucket: "react-messanger-68a21.appspot.com",
  messagingSenderId: "138964259361",
  appId: "1:138964259361:web:7c35db705c9b6932498960",
  measurementId: "G-NV11QR8GMJ"
}
);

export const Countext = createContext(null)

export const fbDatabase = getDatabase(appFire);
export const auth       = getAuth(appFire);
export const firestore  = getFirestore(appFire);
export const provider   = new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select account'});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Countext.Provider value={{
    fbDatabase,
    auth,
    firestore,
    provider
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Countext.Provider>
);

