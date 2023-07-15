import './AllMovies.css';
import Card from '../Card/Card';
import FilterRibbon from './FilterRibbon/FilterRibbon';
import PropTypes from 'prop-types';
import Loader from '../LoadSpinner/LoadSpinner';
import RatingsFilter from './RatingsFilter/RatingsFilter'

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
  ]

  return (
    <section className='all-movies-view'>

      {waitingForFetch && <Loader />}

      {!waitingForFetch && <> <FilterRibbon changeSearch={changeSearch} searchValue={searchValue} /> <RatingsFilter items={items} /> </>}

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
