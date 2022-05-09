// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4RepBPaE-dM4k0u14F2fmcehVXHK1Yo8',
  authDomain: 'warehouse-management-fe26d.firebaseapp.com',
  projectId: 'warehouse-management-fe26d',
  storageBucket: 'warehouse-management-fe26d.appspot.com',
  messagingSenderId: '469780361957',
  appId: '1:469780361957:web:ad74b028e0519ac55bda0c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
