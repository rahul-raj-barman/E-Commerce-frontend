import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <>
        <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet recusandae sit voluptatem libero et deserunt! Magni ea blanditiis eos deleniti expedita voluptates officia quia in ab porro perspiciatis debitis at, atque odio rerum nulla quae doloribus eligendi natus aspernatur.</p>
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
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
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
