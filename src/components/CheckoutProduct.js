import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket} , dispatch] = useStateValue()

    const removeFromBasket = () => {
        //Removing items from basket
        dispatch ({
            type : 'REMOVE_FROM_BASKET',
            id : id,
        })
    }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt="" />
    
         <div className='checkoutProduct_info'>
         <p className='checkoutProduct_title'>{title}</p>
         
         
         <p className='checkoutProduct_price'> Price :
         <small>$</small>
         <strong>{price}</strong>
         
         </p>
         

         <button onClick={removeFromBasket}>Remove from basket</button>

         </div>
        
    </div>
    
  )
}

export default CheckoutProduct
