import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyAvYcYMZRkfYBgHEu11vfmQUrf9SkcAqcQ",
//   authDomain: "comision-47160-ecommerce.firebaseapp.com",
//   projectId: "comision-47160-ecommerce",
//   storageBucket: "comision-47160-ecommerce.appspot.com",
//   messagingSenderId: "231764132002",
//   appId: "1:231764132002:web:08bc81e15e4454e32d17fb"
// };

const firebaseConfig = {
  apiKey: "AIzaSyANa429Ht8URTEjdmFm3ur8rgh54TS9yQo",
  authDomain: "tienda-muydeco.firebaseapp.com",
  projectId: "tienda-muydeco",
  storageBucket: "tienda-muydeco.appspot.com",
  messagingSenderId: "265023209946",
  appId: "1:265023209946:web:f5ed0d291d2ea5a60680e3"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
