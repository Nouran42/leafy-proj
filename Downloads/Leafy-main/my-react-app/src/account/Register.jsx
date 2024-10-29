import '../css/style.css';
import React, { useRef ,useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 



const Register = () => {
    axios.defaults.baseURL = 'http://localhost:8080'; 
    axios.defaults.withCredentials = true; 
   
    const [error, setError] = useState(null);
    const navigate =useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        phoneNumber:'',
        email: '',
        password: '',
        address:''
       
    });



   /* const handleSubmit = async (e) => {
        e.preventDefault();
       // try {
            const response = await axios.post('/users/create', user);
            console.log('User registered successfully!', response.data);
           
          
            navigate('/');
            
       // } catch (error) {
           // console.error('Error registering user:', error);

       // }
    };*/

    const handleSubmit = async (e) => {
        e.preventDefault();
        const maxRetries = 3;
        let attempts = 0;
        let success = false;
    
        while (attempts < maxRetries && !success) {
            try {
                const response = await axios.post('/users/create', user);
                console.log('User registered successfully!', response.data);
                navigate('/');
                success = true;
            } catch (error) {
                attempts++;
                console.error(`Attempt ${attempts} failed:`, error.message);
                setError("Email already exists. Enter another account");
                if (attempts >= maxRetries) {
                    console.error('All attempts failed');
                    if (error.response) {
                        console.error('Error response data:', error.response.data);
                        console.error('Error response status:', error.response.status);
                        console.error('Error response headers:', error.response.headers);
                    } else if (error.request) {
                        console.error('Error request:', error.request);
                    } else {
                        console.error('Error message:', error.message);
                    }
                    console.error('Error config:', error.config);
                }
            }
        }
    };
    
    return (
        <div className="bg-light d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundImage: "url('/images/89210.jpg')", backgroundSize: 'cover', fontFamily:'Roboto'  }}>
            <div className="container" style={{ maxWidth: '2500px', padding: '50px' }}>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card cont">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 img-container">
                                        <img src="/images/Screenshot 2023-12-28 151325.jpg" alt="not found" className="img-fluid mb-8 image" />
                                        <p className="text-center img-overlay">Join<br />our<br />Family!</p>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center flex-md-wrap">
                                        <div className="w-100">
                                       
                                            <h1 className="mb-4 text-center txt">Sign up</h1>
                                            {error && <div className="alert alert-danger" role="alert">{error}</div>} {/* Error badge */}
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className="form-control" placeholder="First Name" required />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className="form-control" placeholder="Last Name" required />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="tel" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} className="form-control" placeholder="Phone Number" required />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" placeholder="Email" required />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="text" name="address" value={user.address} onChange={handleChange} className="form-control" placeholder="Address" required />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control" placeholder="Password" required />
                                                </div>
                                                <button type="submit" className="btn button w-100 mb-3">Register</button>
                                            
                                            </form>
 
                                               
                                                
                                              
                                
                                            <div className="text-center pt-2">
                                                <p>Already have an account?<Link to="/login" className="text-decoration-underline">Sign In</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
