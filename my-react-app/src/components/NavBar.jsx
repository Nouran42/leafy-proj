
import { Link } from 'react-router-dom'; 
import '../css/style2.css'; 
import '../css/style3.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import leafy from '../images/Leafy (3).png'
import farmer from "../images/farmer.png"
import cart from "../images/grocery-store (1).png"



const NavBar = () => {
    return ( <header className="primary-header">
    <div className="wrapper2">
      <div className="primary-header__inner">
        <span className="logo">
          <img
            src={leafy}
            alt=""
            style={{ maxWidth: '110px' }}
            className="logoimg"
          />
        </span>
        <ul className="nav-list" style={{ paddingTop: '10px' }}>
          <li>
            <Link to="/" className="disabled">Home</Link> {/* Use Link for navigation */}
          </li>
          <li>
          <a href="/product-category/plants/plants1.html">Plants</a>
          </li>
          <li>
            <Link to="/product-category/seeds/seeds">Seeds</Link>
          </li>
          <li>
            <Link to="/product-category/Garden Supplies/gardensupplies">Garden Supplies</Link>
          </li>
          <li>
            <a href="#">Detect</a>
          </li>
          <li>
            <form className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search.."
                aria-label="Search"
                style={{ paddingBottom: '10px', height: '2.2rem', width: '7rem' }}
              />
              <button className="btn btn-outline-success" type="submit" style={{ marginLeft: '10px', height: '2.2rem' }}>
                Search
              </button>
            </form>
          </li>
          <li>
            <Link to="/cart">
              <img src={cart} alt="" width="30" height="30" />
             </Link>
          </li>
          <div className="dropdown" style={{ marginTop: '-5px' }}>
            <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={farmer} alt="" width="30" height="32" />
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="../account/login.html">login</a>
              </li>
              <li>
                <a className="dropdown-item" href="../account/register.html">sign up</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </header>
);
}
 
export default NavBar;