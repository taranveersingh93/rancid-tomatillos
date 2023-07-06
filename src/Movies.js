import './Movies.css';
import Card from './Card';

function Movies({ movies }){

  const movieCards = movies.map(movie => {
    return (
      <Card 
        // pass props down to card
        // need poster and movie title only
        movieTitle={movie.title}
        moviePoster={movie.poster_path}
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