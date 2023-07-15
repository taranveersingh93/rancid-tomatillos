import { useState } from "react"
import './FilterRibbon.css'
import crossIcon from '../../../images/cross.png'
import PropTypes from 'prop-types';
import RatingsFilter from '../RatingsFilter/RatingsFilter'

const Searchbar = ({changeSearch, searchValue}) => {  

  
  return (
    <div className="search-container">
      <input 
        className="searchbar"
        name='searchbar'
        placeholder="Search for a movie"
        type="text"
        onChange={event => changeSearch(event.target.value)}
        value={searchValue}
        ></input>
      <div className="cross-container">
        <img
          src={crossIcon}
          name='cross-icon'
          className="cross-icon"
          onClick={() => changeSearch('')}/>
      </div>
    </div>
  )
}

const FilterRibbon = ({changeSearch, searchValue}) => {
  const items = [
    {
      id: 1,
      value: '1.0 +'
    }, 
    {
      id: 2,
      value: '2.0 +'
    },  
    {
      id: 3,
      value: '3.0 +'
    }, 
    {
      id: 4,
      value: '4.0 +'
    }, 
    {
      id: 5,
      value: '5.0 +'
    }, 
    {
      id: 6,
      value: '6.0 +'
    },  
    {
      id: 7,
      value: '7.0 +'
    }, 
    {
      id: 8,
      value: '8.0 +'
    }, 
    {
      id: 9,
      value: '9.0 +'
    },
    {
      id: 10,
      value: '10.0 +'
    }
  ];

  return (
    <div className="all-movies-filter-ribbon"><>
      <Searchbar changeSearch={changeSearch} searchValue={searchValue}/>
      <RatingsFilter items={items} />
    </>
    </div>
  )
}

Searchbar.propTypes = {
  changeSearch: PropTypes.func,
  searchValue: PropTypes.string
}

FilterRibbon.propTypes = {
  changeSearch: PropTypes.func,
  searchValue: PropTypes.string
}

export default FilterRibbon;