import React from 'react'
import './Products.css'
import { useStateValue } from './StateProvider';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';


function Products({id, title , price , image ,rating,ratinghalf}) {

  const [ {basket} , dispatch ] =useStateValue();
  console.log ("This is basket" ,basket)
  
  const addToBasket = () => {
    
    //adding items into data layer

    dispatch ({
      type: 'ADD_TO_BASKET',
      item: {
        id:id,
        title:title,
        image:image,
        price:price,
       }
    })


  }

    return (

    <div className='products'>
    
    <img onClick={addToBasket} src={image} alt="" />


    

    <div className='products_info'>
    
        <p>{title}</p>
       
    </div>
    <p className='products_price'>
        
         $
        <strong>{price}</strong>
        

    </p>
    <div className='stars'> 
    {Array(rating)
    .fill().map((_,i)=> (
      <p className='star_rating'>
       <StarIcon className='star'/> 
    
      </p>
    ))}
    {Array(ratinghalf)
    .fill().map((_,i)=> (
      <p className='star_rating'>
       <StarHalfIcon className='star'/> 
    
      </p>
    ))}

    </div>
    
    <button onClick={addToBasket}>Add to basket</button>

    
    
      
    </div>

    
  )
}

export default Products
