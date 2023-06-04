import React, { useEffect } from 'react'
import './App.css';
import Banner from './components/Banner';
import Downheader from './components/Downheader';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Checkout from './components/Checkout'
import Login from './components/Login';
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment'
import Footer from './components/Footer';
import Orders from './components/Orders';



function App() {

  const [{} , dispatch] = useStateValue()
  
  useEffect (() => {
    auth.onAuthStateChanged(authUser => {
      console.log ('The user is ', authUser);

      if(authUser){

        dispatch ( {
          type : 'SET_USER',
          user : authUser
        })
        
      }else {
        dispatch ( {
          type:'SET_USER',
          user : null
        })
      }
    })

   }, [])

  return (
    <Router>
         <div className="app">
             <Routes>
                 <Route path='/'
                  element = {<Header />}
                />

             <Route path="/checkout" 
                 element = {<Header />}
                 />

            <Route path="/login" 
                element = {<Login />}
                />
            </Routes>

          <Routes>
             <Route path="/payment" 
            element = {<Payment />}
             />
           </Routes>

          <Routes>
             <Route path="/orders" 
            element = {<Orders />}
             />
           </Routes>
   
          <Routes>
              <Route path="/checkout" 
              element = {<Downheader />}
              />
          </Routes>

          <Routes>
              <Route path="/checkout" 
              element = {<Checkout />}
              />
           </Routes>
       
       
          <Routes>
             <Route path='/'
              element = {<Downheader />}
              />
          </Routes>
      

      <main className='main'>
        <Routes>
          <Route path="/"
          element = {<Banner />}
           />
           </Routes>
           
           <Routes>
           <Route path="/"
           element = {<Home />}
           />
           </Routes>
        
      </main>
      <Routes>
        <Route path="/" 
          element = {<Footer />}
        />
      </Routes>
      

      </div>
      </Router>
      
      
    
    
  );
}



export default App;
