
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp} from 'firebase/app'
import {getFirestore, setDoc, getDoc, doc, collection, getDocs} from 'firebase/firestore'
import CardList from '../components/card-list/card-list.component';
import { useState, useEffect } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
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
export const auth = getAuth(app);




export const getCarsList=()=>{

 const [cars, setCars]=useState([])

    useEffect(()=>{
        const colRef=collection(db, 'cars')
        //getcollection data
        getDocs(colRef).then((snapshot)=>{
        let cars =[]
        snapshot.docs.forEach((doc)=>{
        cars.push({...doc.data(), id: doc.id}) 
    })
        //console.log(cars)
        setCars(cars)
        
    }).catch(err=>{console.log(err.message)})
    },[])
    return cars
}


export const signInAuthUserWithEmailAndPassword=async( email,password)=>{  //authentication with user and password
  if(!email||!password) return;   //if email or password is not provided then exit
  return await signInWithEmailAndPassword(auth, email, password);
}

 

