import '../css/style.css'
import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import setAuthToken from '../services/myForm';




const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate=useNavigate();
    axios.defaults.baseURL = 'http://localhost:8080'; 
    axios.defaults.withCredentials = true; 
   


   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', {
                email: email,
                password: password
            });

            const { token, typeID} = response.data;
            localStorage.setItem('token', token);
          
            localStorage.setItem('userType', typeID);
            setAuthToken();
           
            console.log('Axios Authorization Header:', axios.defaults.headers.common['Authorization']);

            if (typeID === 1) {
                navigate('/adminDashboard');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid email or password. Please try again.');
        }
    };
    return (
        <div className="bg-light d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundImage: "url('/images/89210.jpg')", backgroundSize: 'cover', fontFamily:'Roboto' }}>
            <div className="container" style={{ maxWidth: '2500px', padding: '50px' }}>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card cont">
                            <div className="card-body">
                            {error && ( // Display alert if error state is not null
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                <div className="row">
                                    <div className="col-md-6 img-container">
                                        <img src="/images/Screenshot 2023-12-28 151325.jpg" alt="not found" className="img-fluid mb-8 image" />
                                        <p className="text-center img-overlay">Welcome<br />Back!</p>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center flex-md-wrap">
                                        <div className="w-100">
                                            <h1 className="mb-4 text-center txt">Sign in</h1>
                                            <div className="row mt-4">
                                             
                                            </div>
                                            <form className="w-100" onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label htmlFor="inputEmail5" className="form-label">Email</label>
                                                    <input
                                                        type="email"
                                                        id="inputEmail5"
                                                        className="form-control"
                                                        aria-describedby="passwordHelpBlock"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                                                    <input
                                                        type="password"
                                                        id="inputPassword5"
                                                        className="form-control"
                                                        aria-describedby="passwordHelpBlock"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="btndiv">
                                                    <button type="submit" className="btn btn-primary button">Login</button>
                                                </div>
                                            </form>
                                            <div className="text-center pt-2">
                                                <p>Don't have an account? <Link to="/register" className="text-decoration-underline">Sign Up</Link></p>
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

export default Login;