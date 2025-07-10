// src/lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// As suas credenciais do Firebase que copiou da consola
const firebaseConfig = {
  apiKey: "AIzaSyDg0Vkrb9aLiEyEQRntrv5EvC9bSnffFVk",
  authDomain: "retail-5d0f2.firebaseapp.com",
  projectId: "retail-5d0f2",
  storageBucket: "retail-5d0f2.firebasestorage.app",
  messagingSenderId: "281562587128",
  appId: "1:281562587128:web:519b9531907755c871800d"
};

// Inicializar o Firebase de forma segura (evita reinicializar no lado do cliente)
// Esta é uma best practice para Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };