import './AllMovies.css';
import Card from '../Card/Card';
import FilterRibbon from './FilterRibbon/FilterRibbon';
import { useState } from 'react';

const AllMovies = ({ movies, changeSearch }) => {
  const movieCards = movies.map(movie => {
    return (
      <Card
        movieTitle={movie.title}
        moviePoster={movie.poster_path}
        movieYear={movie.release_date.slice(0,4)}
        key={movie.id}
        id={movie.id}
      />
    )
  })

  return (
    <section className='all-movies-view'>
      <FilterRibbon changeSearch={changeSearch}/>
      <div className='all-movies-container'>
        {movieCards}
      </div>
    </section>
  )
}

export default AllMovies;