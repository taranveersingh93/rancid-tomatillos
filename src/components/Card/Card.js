import './Card.css';

const Card = ({ movieTitle, moviePoster, movieYear, id }) => {
  return (
    <div className='movie-card'>
      <img src={moviePoster} className='movie-poster' alt={movieTitle} />
      <h3> {`${movieTitle} (${movieYear})`}</h3>
    </div>
  )
}

export default Card;