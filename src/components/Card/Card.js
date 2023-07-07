import './Card.css';

const Card = ({ movieTitle, moviePoster, movieYear, id }) => {
  return (
    <div className='movie-card'>
      <div className='movie-card-image-container'>
        <img src={moviePoster} className='movie-poster' alt={movieTitle} />
      </div>
      <h3 className='movie-title'> {`${movieTitle} (${movieYear})`}</h3>
    </div>
  )
}

export default Card;