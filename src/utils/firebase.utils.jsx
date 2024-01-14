
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp} from 'firebase/app'
import {getFirestore, setDoc, getDoc, doc, collection, getDocs} from 'firebase/firestore'
import CardList from '../components/card-list/card-list.component';
import { useState } from 'react';
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

//init services
export const db =getFirestore();

//export const [cars, setCars]=useState([])

export const getCarsList=()=>{
  //collection ref
 const colRef=collection(db, 'cars')
 //getcollection data
 getDocs(colRef).then((snapshot)=>{
  let cars =[]
  snapshot.docs.forEach((doc)=>{
    cars.push({...doc.data(), id: doc.id})
  })
  console.log(cars)
 }).catch(err=>{console.log(err.message)})
 
}


 


