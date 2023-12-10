
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3u95fPpBWFWromrpGcLIArl0fP4Z4RTQ",
  authDomain: "dazed-clothing.firebaseapp.com",
  projectId: "dazed-clothing",
  storageBucket: "dazed-clothing.appspot.com",
  messagingSenderId: "275818184293",
  appId: "1:275818184293:web:8491a5db735d860699908c"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); 

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentfromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { 
        displayName,
        email,
        createdAt
      })
    }catch(err) {
      console.log('Error creating user', err)
    }
  }
  return userDocRef;
}