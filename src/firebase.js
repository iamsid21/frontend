import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

let app = firebase.initializeApp({
    apiKey: "AIzaSyATb2wnxGUD_RvMA3MWDcb6mdykJLLPX6c",
    authDomain: "auth-bond33.firebaseapp.com",
    projectId: "auth-bond33",
    storageBucket: "auth-bond33.appspot.com",
    messagingSenderId: "715575231512",
    appId: "1:715575231512:web:3069ab8cb107b14855ef6d"
})

export const auth = app.auth()
export default app