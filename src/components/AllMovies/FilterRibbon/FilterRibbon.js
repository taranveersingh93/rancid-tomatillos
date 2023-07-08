import { useState } from "react"
import './FilterRibbon.css'
import crossIcon from '../../../images/cross.png'


const Searchbar = ({changeSearch, searchValue}) => {  
  return (
    <div className="search-container">
      <input 
        className="searchbar"
        placeholder="Search for a movie"
        type="text"
        onChange={event => changeSearch(event.target.value)}
        value={searchValue}
      ></input>
      <div className="cross-container">
        <img
          src={crossIcon}
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

export default FilterRibbon;