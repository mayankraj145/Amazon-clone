import React from 'react'
// import { Link } from 'react-router-dom'
import './Payment.css'
import {Link} from "react-router-dom"

function Payment() {

    // const navigate = useNavigate();
  return (
    <div className="payment">
      <p>This Payment Page Is Under Development</p>
      <Link to='/checkout'>
      {/* <div className="redirect"> */}
      <button className='redirect_button'>Redirect Back</button>

      {/* </div> */}
       
      

     
      
      </Link>
    </div>
  )
}

export default Payment
