import './Movies.css';
import Card from '../Card/Card';

const Movies = ({ movies }) => {
  
  const movieCards = movies.map(movie => {
    return (
      <Card 
        // pass props down to card
        // need poster and movie title only
        movieTitle={movie.title}
        moviePoster={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
    )
  })

  return (
    <div className='all-movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies;