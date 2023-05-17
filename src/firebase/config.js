import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // 권한 관련
import { getFirestore, Timestamp } from 'firebase/firestore'; //저장소 관련
import { getStorage } from 'firebase/storage'; // 이미지 저장

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_SENDER_ID,
  VITE_FIREBASE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appAuth = getAuth(); // 권한 관련
const appFireStore = getFirestore(app); //저장소 관련
const timestamp = Timestamp; // 타임스탬프 관련
const storage = getStorage(); //이미지관련
const auth = getAuth(app);

export { auth, appAuth, appFireStore, timestamp, storage };
