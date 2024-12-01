import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBCZMZQ9o9YYgLGPnS8i5zMXhpJ6Zl_Xvw",
  authDomain: "kanz-ai.firebaseapp.com",
  projectId: "kanz-ai",
  storageBucket: "kanz-ai.appspot.com",
  messagingSenderId: "839731107933",
  appId: "1:839731107933:web:5d7e106e79d91f9e9e3f1a"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);