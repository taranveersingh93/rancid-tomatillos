import { useState } from "react"



const Searchbar = ({changeSearch}) => {  
  return (
    <div className="search-container">
      <input 
        className="searchbar"
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