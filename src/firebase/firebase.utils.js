import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUsaEWZSP2JIJJiVzHeXfLvIIsGVBf1nc",
  authDomain: "crwn-db-f96d8.firebaseapp.com",
  databaseURL: "https://crwn-db-f96d8.firebaseio.com",
  projectId: "crwn-db-f96d8",
  storageBucket: "crwn-db-f96d8.appspot.com",
  messagingSenderId: "28005803217",
  appId: "1:28005803217:web:6949f28fb7df76a3b711f0",
  measurementId: "G-LWL71BYTQF",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const collectionRef = firestore.collection("/users");

  const snapShot = await userRef.get();

  const collectionSnapshot = await collectionRef.get();

  console.log({ users: collectionSnapshot.docs.map((doc) => doc.data()) });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

//For updating firebase
// export const addCollectionAndDocuments = async  (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();

//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj)
//   })

//   return await batch.commit();
// }

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  
  return transformedCollection.reduce((accumulator, collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
