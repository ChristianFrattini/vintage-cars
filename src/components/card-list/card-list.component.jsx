import './card-list.styles.scss'
import Card from '../card/card.component';
import { getCars } from '../../utils/firebase.utils';
import { useState } from 'react';
import { useEffect } from 'react';


const CardList=()=>{

    getCars()
    const cars =[
        {
            id:1,
            name: 'car1'
        },
        {
            id:2,
            name: 'car2'
        },
        {
            id:3,
            name: 'car3'
        },
        {
            id:4,
            name: 'car4'
        }
    ]

    return <div className='card-list'>
            {cars.map(car=>{
                return( 
                <Card key={car.id} car={car}/>
            )})}
        </div>;
}

export default CardList