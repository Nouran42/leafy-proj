import React, {useState} from 'react';
import '../css/style2.css'; 
import '../css/style3.css'; 
import axios from 'axios';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearchTerm(e.target.searchTerm.value); 
        onSearch(searchTerm); 
      };

    return (
        <form className="d-flex" onSubmit={handleSearch}>
            <div>
             
                <input
                    type="text"
                    id="searchTerm"
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search.."
                    aria-label="Search"
                    style={{ paddingBottom: '10px', height: '2.2rem', width: '7rem' }}
                />
            </div>
            <button className="btn btn-outline-success" type="submit" style={{ marginLeft: '10px', height: '2.2rem' }}>Search</button>
            </form>
    );
};

export default Search;
