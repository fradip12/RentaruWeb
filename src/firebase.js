// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCDuOuZMiLE8VDCMV7xP2vb4w87pQLWWIw",
    authDomain: "prototype-rentaru.firebaseapp.com",
    databaseURL: "https://prototype-rentaru.firebaseio.com",
    projectId: "prototype-rentaru",
    storageBucket: "prototype-rentaru.appspot.com",
    messagingSenderId: "251251910023",
    appId: "1:251251910023:web:38a623aa0a2afd8a779f22",
    measurementId: "G-KY201X3FVT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
    db,
    auth,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}