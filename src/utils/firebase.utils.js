
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged} from 'firebase/auth'
import {
  getFirestore, 
  doc, 
  getDoc, 
  collection,
  writeBatch,
  query, 
  getDocs,
  setDoc} from 'firebase/firestore'

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);

  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
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
        createdAt,
        ...additionalInformation
      })
    }catch(err) {
      console.log('Error creating user', err)
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () =>  {
  await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)