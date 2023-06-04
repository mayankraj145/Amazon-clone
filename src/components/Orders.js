import React from 'react'
import { Link } from 'react-router-dom'
import './Orders.css'

function Orders() {
  return (
    <div className="order">
    <p>This Order Page is Under Development</p>
      <Link to='/'>
      <button className="order_button"> Redirect Back </button>

      </Link>
    </div>
  )
}

export default Orders
