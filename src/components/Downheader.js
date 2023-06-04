import React from 'react'
// import MenuIcon from '@mui/icons-material/Menu'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import './Downheader.css'

function Downheader() {
  return (
    
    <div className='div'>
    <PlaylistPlayIcon className='menu'/>
    <p className='tag'>
    
    All
    </p>
    <p > <a className='link' href="#">Today's Deals</a> </p>
    <p > <a className='link' href="">Amazon Business</a> </p>
    <p > <a className='link' href=""> Prime Video </a></p>
    <p > <a className='link' href="">Customer Service</a> </p>
    <p > <a className='link' href="">Registry</a> </p>
    <p > <a className='link' href="">Gift Cards</a> </p>
    <p > <a className='link' href="">Offers</a> </p>
      
    </div>

   
    
  )
}

export default Downheader
