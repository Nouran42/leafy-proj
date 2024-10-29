import React from "react";
import '../css/style2.css';
import '../css/style3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';
import leafyWhite from '../../public/images/leafy (white logo).png'


const Footer = () => {
    return (  
        <>   <footer className="footer">
          <div className="container cont">
            <div className="row foot-row">
              <div className="footer-col col">
                <h4>Get in touch</h4>
                <ul>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Home</a></li>
                </ul>
              </div>
              <div className="footer-col col">
                <h4>Let us help</h4>
                <ul>
                  <li><a href="#">Leafy guides</a></li>
                  <li><a href="#">Payment policy</a></li>
                  <li><a href="#">Shipping policy</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Terms of service</a></li>
                </ul>
              </div>
              <div className="footer-col col">
                <h4>Work with us</h4>
                <ul>
                  <li><a href="#">jobs</a></li>
                  <li><a href="#">Sell with us</a></li>
                </ul>
              </div>
              <div className="footer-col col">
                <h4>follow us</h4>
                <div className="social-links">
                  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                </div>
              </div>
              <div className="col">
               <img src={leafyWhite} alt="" style={{height:'150px', width:'300px',marginLeft:'100px'}}/>
              </div>
            </div>
          </div>
        </footer>
  
        <footer className="copyright">
          <div className="container">
            <div>Copyright © 2024 - Leafy. All rights reserved.</div>
          </div>
        </footer>
        </>

      
    );
  }
  
  export default Footer;