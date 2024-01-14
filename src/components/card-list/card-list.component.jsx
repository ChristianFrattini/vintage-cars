import './card-list.styles.scss'
import Card from '../card/card.component';
//import { getCars } from '../../utils/firebase.utils';
import { useState } from 'react';
import { useEffect } from 'react';
import {getCarsList,db } from '../../utils/firebase.utils';
import {getFirestore, setDoc, getDoc, doc, collection, getDocs} from 'firebase/firestore'


const CardList=()=>{

    const [cars, setCars]=useState([])

    useEffect(()=>{
        const colRef=collection(db, 'cars')
        //getcollection data
        getDocs(colRef).then((snapshot)=>{
        let cars =[]
        snapshot.docs.forEach((doc)=>{
        cars.push({...doc.data(), id: doc.id}) //TO BE REVIEWED TO BE REVIEWED TO BE REVIEWED TO BE REVIEWED
    })
        console.log(cars)
        setCars(cars)
    }).catch(err=>{console.log(err.message)})
    },[])



    return <div className='card-list'>
            {cars.map(car=>{
                return( 
                <Card key={car.id} car={car}/>
            )})}
        </div>;
}

export default CardList