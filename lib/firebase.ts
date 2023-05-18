import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB8wcANp8EixTkYcQE8DGWMp9ExEn_Bt20',
  authDomain: 'nextfire-dcf5a.firebaseapp.com',
  projectId: 'nextfire-dcf5a',
  storageBucket: 'nextfire-dcf5a.appspot.com',
  messagingSenderId: '811776919650',
  appId: '1:811776919650:web:d92e31fa64f6c0464c693b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
