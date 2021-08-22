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
export const addCollectionsAndDocuments = async (colelctionName, dataToAdd) => {
  //1) create Collection
  const collectionRef = db.collection(colelctionName);
  //batch dah 3shan 2dmn en el docs ttdaf mara w7da b7es lw 7asl 7aga fel nos myb2ah mtdaf noshom bs wl ba2ey la2. y3ny hwa by5le 3mlyt el set ttm ka unit w7da m3 b3d ya ng7t ya fshlt.
  const batch = db.batch();
  dataToAdd.forEach((obj) => {
    //2) add doc for every collection
    const docRef = collectionRef.doc(obj.title);
    //3) add data in every every doc
    batch.set(docRef, obj);
  });
  return await batch.commit();
  // commit deh bt3ml return  promise m3mole resolve l null lw el 3mlya n7gt
};

export const addDataTofetchedCollections = (collections) => {
  // add id and routeName to fetched colections from firebase
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  // transform fetched data to object
  return transformedCollections.reduce((acc, el) => {
    acc[el.title.toLowerCase()] = el;
    return acc;
  }, {});
};

export { db, auth, provider, createUserinDataBase };
