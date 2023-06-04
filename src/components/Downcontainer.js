import React from 'react'
import './Downcontainer.css'
import { useStateValue } from './StateProvider';

function Downcontainer({id, title, price , image}) {

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

    <div className='down'>
    
    <img onClick={addToBasket} src={image} alt="" />
   
      
    </div>

    
  )
}

export default Downcontainer
