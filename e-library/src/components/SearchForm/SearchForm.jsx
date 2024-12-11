import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let tempSearchTerm = searchText.current.value.trim();

    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("");
      setResultTitle("Please Enter Something ...");
      
    } else {
      setSearchTerm(tempSearchTerm);
      navigate("/book");
    }

    
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='search-icon' size = {22}  style={{position:'relative'}}/>
              </button>
              <input type = "text" className='form-control' style={{width:'100%'}} placeholder='Search Books' ref = {searchText} />
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
   