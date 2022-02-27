import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDImGyJwF15zPK2NabmHZL2OfTgPWd5-TE",
  authDomain: "d-ecshop.firebaseapp.com",
  projectId: "d-ecshop",
  storageBucket: "d-ecshop.appspot.com",
  messagingSenderId: "1005400267839",
  appId: "1:1005400267839:web:82b349793f35eac3e6ec8a",
};

firebase.initializeApp(firebaseConfig);

export const CreateUserProfileDoc = async (userAuth, AdditionalDatas) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...AdditionalDatas,
      });
    } catch (error) {
      console.log("error field to store in firestore", error.message);
    }
  }
  return userRef;
};

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
