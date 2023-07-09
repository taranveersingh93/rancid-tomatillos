import './AllMovies.css';
import Card from '../Card/Card';
import FilterRibbon from './FilterRibbon/FilterRibbon';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AllMovies = ({ serverError, movies, changeSearch, searchValue, handleClick }) => {
  const movieCards = movies.map(movie => {
    return (
      <Card
        movieTitle={movie.title}
        moviePoster={movie.poster_path}
        movieYear={movie.release_date.slice(0,4)}
        key={movie.id}
        id={movie.id}
        handleClick={handleClick}
      />
    )
  })

  const ErrorMessage = () => {
    return (<h3 className='error-message'>Sorry, No movies to display</h3>);
  }

  return (
    <section className='all-movies-view'>
      <FilterRibbon changeSearch={changeSearch} searchValue={searchValue}/>
      {(!movies.length || serverError) && <ErrorMessage />}
      <div className='all-movies-container'>
        {movieCards}
      </div>
    </section>
  )
}

AllMovies.propTypes = {
  serverError: PropTypes.bool,
  movies: PropTypes.array,
  changeSearch: PropTypes.func,
  searchValue: PropTypes.string,
  handleClick: PropTypes.func
}

export default AllMovies;
