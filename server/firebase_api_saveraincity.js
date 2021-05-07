// SaveRainCity's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBCETNrBXUqAGYMmVY7sORvlnnWwv24HtM",
    authDomain: "saveraincity.firebaseapp.com",
    projectId: "saveraincity",
    storageBucket: "saveraincity.appspot.com",
    messagingSenderId: "689962098482",
    appId: "1:689962098482:web:8818eb69d1f26821fe412b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();