import './card.styles.scss'

const Card=({car})=>{
    const {id, name}=car
    return(
         <div className='card-container' key={id}> 
                <div className='card-name'>
                    <h2>{name}</h2>
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