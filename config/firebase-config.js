const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB8-D9KGNSeHUl9tmWXH3H12bs42_r2o5s",
  authDomain: "strapi-chicking.firebaseapp.com",
  projectId: "strapi-chicking",
  storageBucket: "strapi-chicking.appspot.com",
  messagingSenderId: "245771241220",
  appId: "1:245771241220:web:f9b8e3fa982843bb0e3251"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };

