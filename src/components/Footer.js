import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <>
        <footer>
        <div class="footer-container">
          <div class="footer-section" style={{padding: '20px'}}>
            <h4>About Us</h4>
            <p>Welcome to [Ecommerce Website Name], your ultimate destination for all your online shopping needs! We are a leading ecommerce platform committed to providing you with a seamless and enjoyable shopping experience.</p>
          </div>
          <div class="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Follow Us</h4>
            <ul class="social-icons">
              <li><a href="https://www.facebook.com/profile.php?id=100074213496198"><i class="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/rahulbarma95752"><i class="fab fa-twitter"></i></a></li>
              <li><a href="https://twitter.com/rahulbarma95752"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 My Clothing Store. All rights reserved.</p>
        </div>
      </footer>
      
        </>
    );
}

export default Footer;
