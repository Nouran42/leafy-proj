
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../css/style2.css'; 
import '../css/style3.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import leafy from '../../public/images/Leafy (3).png'
import farmer from "../../public/images/farmer.png"
import cart from "../../public/images/grocery-store (1).png"
import axios from 'axios';
import Search from './Search';




const Header = ({cartCount, onSearch }) => {
   

    return ( 
      <header className="primary-header">
      <div className="wrapper2">
          <div className="primary-header__inner">
              <span className="logo">
                  <img src={leafy} alt="" style={{ maxWidth: '110px' }} className="logoimg" />
              </span>
              <ul className="nav-list" style={{ paddingTop: '10px' }}>
                  <li><a href="/">Home</a></li>
                  <li><a href="/shop">Shop</a></li>
                  <li><a href="/guides">Guides</a></li>
                  <li><a href="/detect">Detect</a></li>
                  <li>
                      <span>
                      <Search onSearch={onSearch} />
                      </span>
                  </li>
                  <li><Link to="/cart"><img src={cart} alt="" width="30" height="30" /><span className="cart-counter">{cartCount}</span></Link></li>
                  <div className="dropdown" style={{ marginTop: '-5px' }}>
                      <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src={farmer} alt="" width="30" height="32" />
                      </a>
                      <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="/login">Login</a></li>
                          <li><a className="dropdown-item" href="/register">Sign up</a></li>
                      </ul>
                  </div>
              </ul>
          </div>
      </div>
  </header>
);
};

export default Header;