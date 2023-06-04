import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
    
    <Carousel
    autoPlay
    infiniteLoop
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    interval={5000}
    >
    <div>
    <img  loading='lazy' src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg" alt="" /> //

    </div>

    <div>
    <img loading='lazy' src="https://links.papareact.com/gi1" alt="" />

    </div>

    
    <div>
    <img  loading='lazy' src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />

    </div>
    <div >
    <img  loading='lazy' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />

    </div>
    <div >
    <img  loading='lazy' src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="" />

    </div>

    </Carousel>

    
      
    </div>
    
  )
}

export default Banner
