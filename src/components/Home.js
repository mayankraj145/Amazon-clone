
import React from 'react'
import Downcontainer from './Downcontainer'
import './Home.css'
import Products from './Products'


function Home() {
  return (
    <div className='home'>
    <div className='border'>
    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a className='anchor' href="https://amazon.in">Click here to go to amazon.in</a> 
    </p>

    </div>
    
    <div className='home_container'>
    
    <Products 
      title='Kapra leboYININF Mens Hipster Hip Hop Short Sleeve Letters Print T-Shirt'
      price={39.99}
      image='https://m.media-amazon.com/images/I/61+mMFlpDOL._AC_UL320_.jpg'
      rating={2}
      ratinghalf={1}
    />
    <Products 
      title="Mens Graffiti Hoodies Print Sweatshirt Fashion Tracksuit Casual Hip-Hop Funny Coat"
      price={49.99}
      rating = {4}
      ratinghalf = {1}
      image='https://m.media-amazon.com/images/I/71mLPQuetFL._AC_UL320_.jpg' />
    <Products 
      title="Facial Cleansing Brush by Olay Regenerist, Face Exfoliator with 2 Brush Heads :: Count (Pack of 1)"
      price={43.99}
      rating={2}
      ratinghalf = {0}
      image='https://m.media-amazon.com/images/I/81mUGylNI3L._AC_UL320_.jpg'
    />
    <Products 
      title="Troadlop Men's Running Shoes Non Slip Shoes Breathable Lightweight Sneakers"
      price={99.99}
      rating={4}
      ratinghalf = {1}
      image='https://m.media-amazon.com/images/I/61aI394Sk0L._AC_UL320_.jpg'
    />

    </div>

    <div className='home_container'>
    <Products 
      title="Men's Distressed Denim Jacket-Unisex - Button Down-Long Sleeve-Trucker Hooded Jacket"
      price={199.99}
      rating={3}
      ratinghalf = {1}
      image='https://m.media-amazon.com/images/I/91tJ13e9R-L._AC_UL320_.jpg'
    />
    <Products 
      title='Eleplus 4 Pieces Comfy Cami Bra for Women Crop Top Yoga Bralette Longline Padded Lounge Bra Pack of 4'
      price={70.99}
      rating={3}
      ratinghalf = {0}
      image='https://m.media-amazon.com/images/I/61ONjU9S3TS._AC_UL320_.jpg'
    />
    <Products 
      title="Doublju Lightweight Thin Zip-Up Hoodie Jacket for Women with Plus Size"
      price={49.99}
      rating={2}
      ratinghalf = {1}
      image='https://m.media-amazon.com/images/I/71ig1u6VRCL._AC_UL320_.jpg'
    />
    <Products 
      title="WSPLYSPJY Women's Print Stretch Bell Bottom Flare Palazzo Pants Trousers"
      price={79.49}
      rating={4}
      ratinghalf = {0}
      image='https://m.media-amazon.com/images/I/61jzswx7ufL._AC_UL320_.jpg'
    />

    </div>

    <div className='home_container'>
    <Products 
      title="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio :: PC/Mac/Laptop/Macbook/Tablet - Black"
      price={329.99}
      rating={0}
      ratinghalf = {1}
      image='https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL320_.jpg'
    />
    <Products 
      title="Apple Watch Series 7 (GPS + Cellular, 41mm) Green Aluminum Case with Clover Sport Band, Regular (Renewed)" 
      price={1119.99}
      rating={5}
      ratinghalf = {0}
      image='https://m.media-amazon.com/images/I/71r-jFmtfIL._AC_UY218_.jpg'
    />
    <Products 
      title="Balasami Women's Retro 50s Plaid Pattern Polka Dot Halter Molded Soft Pads Vintage Bikini Swimsuits Tops"
      price={89.99}
      rating={3}
      ratinghalf = {1}
      image='https://m.media-amazon.com/images/I/61320tEPWrL._MCnd_AC_UL320_.jpg'
    />
    <Products 
      title="DUDHUH Running Shoes for Men Comfortable Athletic Cross Trainer Casual Walking Fashion Mens Tennis Sock Sneakers"
      price={339.99}
      rating={4}
      ratinghalf = {1}
      image='https://m.media-amazon.com/images/I/71OMJ1R2GcL._AC_UL320_.jpg'
      
    />

    </div>

    <div className="home_container">
          <Downcontainer
            
            
            price={1094.98}
           
            image="https://m.media-amazon.com/images/I/61SWjLCijsL._AC_UL320_.jpg"
          />
          <Downcontainer
            
            
            price={1094.98}
           
            image="https://m.media-amazon.com/images/I/71zU+D7lzDS._AC_UL320_.jpg"
          />
          <Downcontainer
            
            
            price={1094.98}
           
            image="https://m.media-amazon.com/images/I/71qOgC1wdSL._AC_UL320_.jpg"
          />
          <Downcontainer
            
            
            price={1094.98}
           
            image="https://m.media-amazon.com/images/I/51Gyb+sbodL._AC_UL320_.jpg"
          />
          <Downcontainer
            
            
            price={1094.98}
           
            image="https://m.media-amazon.com/images/I/7161nOslOjL._AC_UL320_.jpg"
          />
          <Downcontainer
            
            
            price={1094.98}
           
            image="https://m.media-amazon.com/images/I/71UA-uPK-FL._AC_UL320_.jpg"
          />
          <Downcontainer
            
            
            price={1094.98}
           
            image="https://m.media-amazon.com/images/I/71q1UK9G12L._AC_UL320_.jpg"
          />
          
        </div>
    

   


      
    </div>
  )
}

export default Home

