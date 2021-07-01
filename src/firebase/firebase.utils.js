import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  const firebaseConfig = {
      apiKey: "AIzaSyDO6_bBjylJK0dpxjum4E-xEf5niRY8JEM",
      authDomain: "aj-clothing-db.firebaseapp.com",
      projectId: "aj-clothing-db",
      storageBucket: "aj-clothing-db.appspot.com",
      messagingSenderId: "774568531497",
      appId: "1:774568531497:web:9c1846f676c0efd865ae38",
      measurementId: "G-CRWZ3BKW1Z"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set ({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log("error creating user", error.message)
      }
    } 

    return userRef;
  }

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();

  export const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
