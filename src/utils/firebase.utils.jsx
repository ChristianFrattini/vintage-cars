// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  getDoc,
  doc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJUKiF0DffWUM1wgeZjN1UPf0ARf_X3Qo",
  authDomain: "vintage-cars-7e2e6.firebaseapp.com",
  projectId: "vintage-cars-7e2e6",
  storageBucket: "vintage-cars-7e2e6.appspot.com",
  messagingSenderId: "461214912855",
  appId: "1:461214912855:web:4931d11fee61547297ee12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init services
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  //authentication with user and password
  if (!email || !password) return; //if email or password is not provided then exit
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

/*export const addFrontImaged = createAsyncThunk(
  "cars/uploadFrontImage",
  async (image) => {
    const { car_image, car_id } = image;
    console.log(car_id);
    const frontImageRef = ref(
      storage,
      `CarImages/${car_id}/${car_id}-${car_image.name}`,
    );
    await uploadBytes(frontImageRef, car_image);
    alert("uploaded");
  },
);*/

export const addFrontImage = async (car_image, car_id) => {
  const frontImageRef = ref(
    storage,
    `CarImages/${car_id}/${car_id}-${car_image.name}`,
  );
  await uploadBytes(frontImageRef, car_image);
  alert("uploaded");
};
