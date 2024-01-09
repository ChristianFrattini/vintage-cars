
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp} from 'firebase/app'
import {getFirestore, setDoc, getDoc, doc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJUKiF0DffWUM1wgeZjN1UPf0ARf_X3Qo",
  authDomain: "vintage-cars-7e2e6.firebaseapp.com",
  projectId: "vintage-cars-7e2e6",
  storageBucket: "vintage-cars-7e2e6.appspot.com",
  messagingSenderId: "461214912855",
  appId: "1:461214912855:web:4931d11fee61547297ee12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore();

export const getCars=async()=>{
  const docRef = doc(db,'cars', 'car1')
  const dataSnapshot=await getDoc(docRef);
  if(dataSnapshot.exists()){
    const data=dataSnapshot.data()
    console.log(data.car_name)
    return data
  }
  
}