import React, { useState ,useEffect} from "react";
import '../css/style2.css';
import '../css/style3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import App from '../App';
import {filterProduct} from '../scripts/FilterProducts'
import axios from 'axios';
import setAuthToken from "../services/myForm";

const Filter = ({ applyFilter, setMainTitle  }) => {
  
  const [activeFilter, setActiveFilter] = useState('allproducts');

  
  useEffect(() => {
    setAuthToken();
}, []);

const handleFilterClick = async (event, value) => {
    const title = event.target.innerText;
    console.log('Filter Clicked:', value);  // Debugging output
    try {
        await filterProduct(value, title, applyFilter, setMainTitle);
        setActiveFilter(value);
        console.log('Active Filter:', value);  // Debugging output
    } catch (error) {
        console.error('Error fetching filtered products:', error);
    }
};
  const activeStyle = {
      color: '#739b7e',
  };

  const inactiveStyle = {
      color: 'inherit',
      border: 'none',
      backgroundColor: 'inherit',
  };

  return (
      <div className='col-md-2 category'>
          <h4 className='mb-4'>Filter</h4>
          <button
              className='button-value allprod mb-3'
              style={activeFilter === 'allproducts' ? activeStyle : inactiveStyle}
              onClick={(e) => handleFilterClick(e, 'allproducts')}
          >
              All Products
          </button>
          <div className='accordion accordion-flush' id='accordionFlushExample'>
              <div className='accordion-item'>
                  <h2 className='accordion-header'>
                      <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#flush-collapseOne'
                          aria-expanded='false'
                          aria-controls='flush-collapseOne'
                      >
                          PLANTS
                      </button>
                  </h2>
                  <div
                      id='flush-collapseOne'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionFlushExample'
                  >
                      <div className='accordion-body'>
                          <ul className='list-unstyled mb-0'>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'shadedareaplants' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'shadedareaplants')}
                                  >
                                      Shaded Area Plants
                                  </button>
                              </li>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'scentedplants' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'scentedplants')}
                                  >
                                      Scented Plants
                                  </button>
                              </li>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'airpurifyingplants' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'airpurifyingplants')}
                                  >
                                      Air Purifying Plants
                                  </button>
                              </li>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'houseplants' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'houseplants')}
                                  >
                                      House Plants
                                  </button>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className='accordion-item'>
                  <h2 className='accordion-header'>
                      <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#flush-collapseTwo'
                          aria-expanded='false'
                          aria-controls='flush-collapseTwo'
                      >
                          SEEDS
                      </button>
                  </h2>
                  <div
                      id='flush-collapseTwo'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionFlushExample'
                  >
                      <div className='accordion-body'>
                          <ul className='list-unstyled mb-0'>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'Fruitseeds' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'Fruitseeds')}
                                  >
                                      Fruit Seeds
                                  </button>
                              </li>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'Vegetableseeds' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'Vegetableseeds')}
                                  >
                                      Vegetable Seeds
                                  </button>
                              </li>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'Herbseeds' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'Herbseeds')}
                                  >
                                      Herb Seeds
                                  </button>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className='accordion-item'>
                  <h2 className='accordion-header'>
                      <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#flush-collapseFour'
                          aria-expanded='false'
                          aria-controls='flush-collapseFour'
                      >
                          GARDEN SUPPLIES
                      </button>
                  </h2>
                  <div
                      id='flush-collapseFour'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionFlushExample'
                  >
                      <div className='accordion-body'>
                          <ul className='list-unstyled mb-0'>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'soil' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'soil')}
                                  >
                                      Soil
                                  </button>
                              </li>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'ToolsandEquipment' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'ToolsandEquipment')}
                                  >
                                      Tools and Equipment
                                  </button>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className='accordion-item'>
                  <h2 className='accordion-header'>
                      <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#flush-collapseThree'
                          aria-expanded='false'
                          aria-controls='flush-collapseThree'
                      >
                          POTS AND PLANTERS
                      </button>
                  </h2>
                  <div
                      id='flush-collapseThree'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionFlushExample'
                  >
                      <div className='accordion-body'>
                          <ul className='list-unstyled mb-0'>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'Officepots' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'Officepots')}
                                  >
                                      Office Pots
                                  </button>
                              </li>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'PlasticPots' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'PlasticPots')}
                                  >
                                      Plastic Pots
                                  </button>
                              </li>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'Claypots' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'Claypots')}
                                  >
                                      Clay Pots
                                  </button>
                              </li>
                              <li>
                                  <button
                                      className='button-value'
                                      style={activeFilter === 'Moderndesign' ? activeStyle : inactiveStyle}
                                      onClick={(e) => handleFilterClick(e, 'Moderndesign')}
                                  >
                                      Modern Design
                                  </button>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Filter;
