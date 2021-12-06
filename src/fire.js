// Need to make sure to install - npm i firebase@^8.10.0
import firebase from 'firebase';
const APIkey = require('./secret')

const firebaseConfig = {
    apiKey: APIkey,
    authDomain: "metashop-e942b.firebaseapp.com",
    projectId: "metashop-e942b",
    storageBucket: "metashop-e942b.appspot.com",
    messagingSenderId: "874768375951",
    appId: "1:874768375951:web:9ea2cae3e8b0ee173e10fa"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
    }
}  

const fire = firebase;
export default fire;