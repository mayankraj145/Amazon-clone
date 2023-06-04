import React from 'react'
import './Footer.css'
import navIcon1 from '../Assets/nav-icon1.png'
import navIcon2 from '../Assets/nav-icon2.png'
import navIcon3 from '../Assets/nav-icon3.png'
import gitIcon from '../Assets/github-logo.png'



function Footer() {
  return (
    <footer class="footer">

   

  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="">watch</a></li>
  	 				<li><a href="">bag</a></li>
  	 				<li><a href="">shoes</a></li>
  	 				<li><a href="">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow Me?</h4>
  	 			<div class="social-links">
  	 				<a href="https://www.linkedin.com/in/adarsh-mehta-316a731bb/"><img src={navIcon1} alt="" /> </a> 
  	 				<a href=""><img src={navIcon2} alt="" /> </a>
  	 				<a href=""><img src={navIcon3} alt="" /></a>
  	 				<a href="https://github.com/adarsh01-code"><img src={gitIcon} alt="" /></a>
  	 				
  	 			</div>
  	 		</div>
  	 	</div>
        <div className='footer_text'>
        <p className='footer_paragraph'>Conditions of Use . Privacy Notice . Interest-Based Ads© 1996-2022 . Amazon.com Inc. or its affiliates </p>
        <p className='footer_paragraph1'>All Rights Reserved. This is a website clone of AMAZON </p>
             <div className='footer_text1'>
             <p className='footer_paragraph'>Click logo </p>
             <a href="#"> <img className='footer_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /> </a>  
        
             </div>
        </div>
        
  	 </div>
  </footer>
  )
}

export default Footer


