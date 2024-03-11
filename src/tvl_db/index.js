import { initializeApp } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
  initializeFirestore,
} from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";
import { getStorage, connectStorageEmulator } from "firebase/storage";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9LTf0oMvFBsaBAvo14UdQwwoY5MtXZos",
  authDomain: "leeontvp-de787.firebaseapp.com",
  projectId: "leeontvp-de787",
  storageBucket: "leeontvp-de787.appspot.com",
  messagingSenderId: "991689757320",
  appId: "1:991689757320:web:bf71cc55182aa84960453d",
  measurementId: "G-HE5FQ9Q562",
};

const app = initializeApp(firebaseConfig);

const functions = getFunctions(app, "asia-northeast3");
const analytics = getAnalytics(app);
const storage = getStorage(app);
// storage.setMaxOperationRetryTime(60000);
// const db = getFirestore(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

export { db, functions, analytics, storage };

// connectStorageEmulator(storage, "127.0.0.1", 9199);
// connectFunctionsEmulator(functions, "127.0.0.1", 5001);
// connectFirestoreEmulator(db, "127.0.0.1", 8080);
// let db = getFirestore(app);
// firebase.firestore().enablePersistence().then(() => {
//   const firestore = app.firestore();
//   // Use Cloud Firestore ...
// });
