import './card.styles.scss'

const Card=({car})=>{
    const {car_id, car_name}=car
    return(
         <div className='card-container' key={car_id}> 
                <div className='card-name'>
                    <h2>{car_name}</h2>
                </div> 
                <div>
                    
                </div>
                <div className='card-learnmore'>
                    <h3>Learn More</h3>
                </div>
                <div className='contacts'>
                    <h3>Email</h3>
                </div>
        </div>
    )
}

export default Card