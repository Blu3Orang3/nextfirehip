import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  limit,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB8wcANp8EixTkYcQE8DGWMp9ExEn_Bt20',
  authDomain: 'nextfire-dcf5a.firebaseapp.com',
  projectId: 'nextfire-dcf5a',
  storageBucket: 'nextfire-dcf5a.appspot.com',
  messagingSenderId: '811776919650',
  appId: '1:811776919650:web:d92e31fa64f6c0464c693b',
};

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth exports
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';
