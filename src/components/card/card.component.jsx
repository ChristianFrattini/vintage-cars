import './card.styles.scss'

const Card=({car})=>{
    const {id, name}=car
    return(
         <div className='card-container' key={id}> 
                    <h2>{name}</h2>
        </div>
    )
}

export default Card