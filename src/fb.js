
import firebase from 'firebase';


let config = {
    apiKey: "AIzaSyAjn_V-7xoTUEygSBhZUu__wLCvhwvQJXI",
    authDomain: "todo-ninja-ec346.firebaseapp.com",
    databaseURL: "https://todo-ninja-ec346.firebaseio.com",
    projectId: "todo-ninja-ec346",
    storageBucket: "todo-ninja-ec346.appspot.com",
    messagingSenderId: "982338181595",
    appId: "1:982338181595:web:3556367e5facea7080effe",
    measurementId: "G-Q2NTKHPR9Q"
};
// Initialize Firebase
let app = firebase.initializeApp(config);
let db = app.database();

export default db;
