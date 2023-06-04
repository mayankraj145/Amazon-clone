import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { auth } from './firebase';


function Header() {
  const [{basket , user} , dispatch] = useStateValue()

  
    const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      
    }
  } 
  
  return (
    
    <div className='header'>
    <Link to='/'><img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
    </Link>
     
    
     <div className='deliver'>
      <p className='para'>Deliver To</p>
      <div className='location'>
      <LocationOnIcon />
      <p>India</p>
      </div>
      
     </div>
    
      
      <div className='header_search'>
          <input className='header_searchInput' type="text" />
          <div className='header__searchIcon'>
          <SearchIcon  />

          </div>
      </div>

      <div className='header_nav'>
      <Link to={!user && '/login'}>
      

      <div onClick={handleAuthentication} className='header_option'>
      <span className='header__optionLineOne'>Hello {!user ? 'Guest': user.email} </span>
      
      
      <span className='header__optionLineTwoo'>{user?'Sign Out': 'Sign In'}<ArrowDropDownIcon /></span> 
      </div>
      </Link>
      

      <Link to="/orders">

      <div className='header_option'>
      <span className='header__optionLineOne'>Returns</span>
      <span className='header__optionLineTwoo'>& Orders</span>

      </div>

      </Link>
      

      

      <div className='header_option'>
      <span className='header__optionLineOne'>Your</span>
      <span className='header__optionLineTwo'>Prime</span>

      </div>
      <Link to='/checkout'>
      <div className='header_optionBasket'>
        
        <ShoppingCartIcon className='shopping'/>
        
        <span className='header_optionLineTwo header_basketCount'><strong>{basket?.length}</strong></span>
      </div>

      </Link>
      
      
      

      </div>
    </div>
    
  )
} 


export default Header

