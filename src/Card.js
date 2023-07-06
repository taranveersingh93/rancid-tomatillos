import './Card.css';

function Card({ movieTitle, moviePoster }){
  return (
    <div className='movie-card'>
      <img src={moviePoster} className={movieTitle} alt={movieTitle} />
      <h3>
        {movieTitle}
      </h3>
    </div>
  )
}

export default Card;