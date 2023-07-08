import './AllMovies.css';
import Card from '../Card/Card';

const AllMovies = ({ movies, handleClick }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        // pass props down to card
        // need poster and movie title onyl
        movieTitle={movie.title}
        moviePoster={movie.poster_path}
        movieYear={movie.release_date.slice(0,4)}
        key={movie.id}
        id={movie.id}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className='all-movies-container'>
      {movieCards}
    </div>
  )
}

export default AllMovies;