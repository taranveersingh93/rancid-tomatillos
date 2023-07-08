import { useState } from "react"
import './FilterRibbon.css'


const Searchbar = ({changeSearch}) => {  
  return (
    <div className="search-container">
      <input 
        className="searchbar"
        placeholder="Search for a movie"
        type="text"
        onChange={event => changeSearch(event.target.value)}
      ></input>
    </div>
  )
}

const FilterRibbon = ({changeSearch}) => {
  return (
    <div className="all-movies-filter-ribbon">
      <Searchbar changeSearch={changeSearch}/>
    </div>
  )
}

export default FilterRibbon;