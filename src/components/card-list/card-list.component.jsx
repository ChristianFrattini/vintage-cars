import './card-list.styles.scss'
import Card from '../card/card.component';
import {getCarsList} from '../../utils/firebase.utils';



const CardList=()=>{

    const cars=getCarsList()
    //console.log(cars)

    return <div className='card-list'>
            {cars.map(car=>{
                return( 
                <Card key={car.id} car={car}/>
            )})}
        </div>;
}

export default CardList