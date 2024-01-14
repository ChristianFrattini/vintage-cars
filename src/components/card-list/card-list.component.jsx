import './card-list.styles.scss'
import Card from '../card/card.component';
//import { getCars } from '../../utils/firebase.utils';
import { useState } from 'react';
import { useEffect } from 'react';
import {getCarsList} from '../../utils/firebase.utils';
import {getFirestore, setDoc, getDoc, doc, collection, getDocs} from 'firebase/firestore'


const CardList=()=>{

    const cars=getCarsList()
    console.log(cars)

    return <div className='card-list'>
            {cars.map(car=>{
                return( 
                <Card key={car.id} car={car}/>
            )})}
        </div>;
}

export default CardList