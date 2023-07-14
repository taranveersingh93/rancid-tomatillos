import './AllMovies.css';
import Card from '../Card/Card';
import FilterRibbon from './FilterRibbon/FilterRibbon';
import PropTypes from 'prop-types';
import Loader from '../LoadSpinner/LoadSpinner';

const AllMovies = ({  waitingForFetch, serverError, movies, changeSearch, searchValue  }) => {
  let movieCards;

  if(movies) {
    movieCards = movies.map(movie => {
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
  }

  const ErrorMessage = () => {
    return (<h3 className='error-message' id='error-message'>Sorry, No movies to display</h3>);
  }
  
  return (
    <section className='all-movies-view'>
      {waitingForFetch && <Loader />}
      {!waitingForFetch && <FilterRibbon changeSearch={changeSearch} searchValue={searchValue}/>}
      {!waitingForFetch && (serverError || !movieCards.length) && <ErrorMessage />}
      <div className='all-movies-container'>
        {!waitingForFetch && movieCards}
      </div>
    </section>
  )
}

AllMovies.propTypes = {
  serverError: PropTypes.bool,
  movies: PropTypes.array,
  changeSearch: PropTypes.func,
  searchValue: PropTypes.string,
}

export default AllMovies;
