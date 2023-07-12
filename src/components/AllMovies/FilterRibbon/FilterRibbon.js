import { useState } from "react"
import './FilterRibbon.css'
import crossIcon from '../../../images/cross.png'
import PropTypes from 'prop-types';


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
  return (
    <div className="all-movies-filter-ribbon">
      <Searchbar changeSearch={changeSearch} searchValue={searchValue}/>
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