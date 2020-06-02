import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config=
    {
        apiKey: "AIzaSyCeVD-MmzdWxuJyOVRAdUfkAfFmwqktYWc",
        authDomain: "crown-db-f5972.firebaseapp.com",
        databaseURL: "https://crown-db-f5972.firebaseio.com",
        projectId: "crown-db-f5972",
        storageBucket: "crown-db-f5972.appspot.com",
        messagingSenderId: "371200856026",
        appId: "1:371200856026:web:60e0dcbf4d61f933cabae3",
        measurementId: "G-VS5YDCRDL2"
      };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
