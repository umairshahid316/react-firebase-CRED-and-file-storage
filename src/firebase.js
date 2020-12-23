import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDcCDziOx4alE-nJ9eLipCRWDwj2vTu_Tk",
    authDomain: "cred-firebase-ba988.firebaseapp.com",
    databaseURL: "https://cred-firebase-ba988-default-rtdb.firebaseio.com",
    projectId: "cred-firebase-ba988",
    storageBucket: "cred-firebase-ba988.appspot.com",
    messagingSenderId: "956580152968",
    appId: "1:956580152968:web:cc7b1d0ae92dcc4545013d",
    measurementId: "G-94ZG1VRB6V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;