import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAdlybcsaXeJ9chTOASBP0ypzIOQbXsT98',
  authDomain: 'ecommerce-b3299.firebaseapp.com',
  projectId: 'ecommerce-b3299',
  storageBucket: 'ecommerce-b3299.appspot.com',
  messagingSenderId: '651929481151',
  appId: '1:651929481151:web:a078f8f0402b9e84dabb0a',
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

const createUserinDataBase = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const docRef = db.doc(`users/${userAuth.uid}`);
  // console.log(docRef);
  const docSnapshot = await docRef.get();
  // console.log(docSnapshot);
  if (!docSnapshot.exists) {
    const { displayName, email } = userAuth;
    const creadtedAt = new Date();

    await docRef.set({
      displayName,
      email,
      creadtedAt,
      ...additionalData,
    });
  }
  return docRef;
};

export { db, auth, provider, createUserinDataBase };
