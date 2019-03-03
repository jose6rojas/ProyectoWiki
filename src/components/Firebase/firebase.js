import app from 'firebase/app';

//Prod
//<script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script>
// Initialize Firebase
var prodConfig = {
    apiKey: "AIzaSyA_UpAlU6OFP8C_14s7Oc1VwMdCDySG4O8",
    authDomain: "wiki-prod.firebaseapp.com",
    databaseURL: "https://wiki-prod.firebaseio.com",
    projectId: "wiki-prod",
    storageBucket: "wiki-prod.appspot.com",
    messagingSenderId: "144106417596"
};
//firebase.initializeApp(prodConfig);


//Dev
//<script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script>
// Initialize Firebase
var devConfig = {
    apiKey: "AIzaSyBTJhHRW60MqYY-mVSqX_UwPxVraZ1iVtc",
    authDomain: "react-firebase-authentic-c4784.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-c4784.firebaseio.com",
    projectId: "react-firebase-authentic-c4784",
    storageBucket: "react-firebase-authentic-c4784.appspot.com",
    messagingSenderId: "809203984683"
};
//firebase.initializeApp(devConfig);

const config =
    process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;