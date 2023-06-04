import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Subtotal() {
    
    const [{basket} , dispatch] = useStateValue()
    const navigate = useNavigate()

    
  return (
    
    <div className='subtotal'>
    
      <CurrencyFormat
      renderText = {(value) => (
        <>
            <p>
                Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
            <input type = 'checkbox' />
            This Order contains a gift

            </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />
      
      <Link to='/payment'>
      <div className='buttoncheckout'>
      
      <button  >Proceed to checkout</button>
      </div>

      </Link> 
    </div>
    
  )
}

export default Subtotal
