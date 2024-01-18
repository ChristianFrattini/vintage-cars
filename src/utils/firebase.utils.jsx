
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp} from 'firebase/app'
import {getFirestore, setDoc, getDoc, doc, collection, getDocs, deleteDoc} from 'firebase/firestore'
import { useState, useEffect } from 'react';
import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
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
    })
    return cars
}


export const signInAuthUserWithEmailAndPassword=async( email,password)=>{  //authentication with user and password
  if(!email||!password) return;   //if email or password is not provided then exit
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser=async()=>{
  try{
    await signOut(auth)
  }catch(error){
    console.log(error)
  }
}

export const deleteItem= async(id)=>{
  try{
    const docRef = doc(db,'cars', id)
    deleteDoc(docRef)
  }catch(error){
    console.log(error)
  }
}

export const addItem=async(car_id, car_name, car_description)=>{
  
    const docRef = doc(db,'cars', car_id)
    console.log(car_id, car_name, car_description)
    const snapshot=await getDoc(docRef);




    if(!snapshot.exists()){  //if document does not exist then create one

      try{
        await setDoc(docRef, {car_id,car_name,car_description})
        //alert ('new item successfully added')
        
      }catch (error){
        console.log('error creating the ', error.message)
        alert('Error during submission. Please try again')
      }
      
    }else{
        console.log("Document data: existing");
        alert('Registration unsuccessful. Email already registered for the prize draw!')
        return
    }
    return snapshot;
}

 


