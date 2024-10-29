import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you use Bootstrap for styling
import '../css/style2.css'; // Custom CSS for additional styling
import '../css/style3.css'; // Additional custom CSS
import Footer from '../components/Footer';
import Header from '../components/Header';

const Detect = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // State to hold the URL of the image preview
  const [prediction, setPrediction] = useState(null);
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Display image preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl(null);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('http://localhost:5000/predictDisease', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setPrediction(response.data.result); 
      setTreatment(response.data.treatment); 
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="col" style={{ width: "100%" }}>
          <div>
            <h1 className="upload-header">Upload Photo</h1>
          </div>
          <div className="upload-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  onChange={handleFileUpload}
                  accept="image/*"
                  id="fileInput"
                  style={{ display: 'none' }} // Hide the default file input
                />
                <label htmlFor="fileInput" className="btn btnnnnn">
                  Choose Image
                </label>
              </div>
              {imageUrl && (
                <div className="form-group">
                  <img src={imageUrl} alt="Uploaded" className="img-preview" />
                </div>
              )}
              <div className="form-group btncont">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!image || loading}
                >
                  {loading ? 'Detecting...' : 'Detect Disease'}
                </button>
              </div>
              {prediction && (
                <div className="prediction-result">
                  <h3 className='detP'> <strong>Prediction</strong></h3>
                  <p>{prediction}</p>
                  <h3 className='detP'><strong>Treatment</strong></h3>
                  <p>{treatment}</p>
                </div>
              )}
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detect;
