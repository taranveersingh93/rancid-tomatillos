import './Card.css';

const Card = ({ movieTitle, moviePoster, id }) => {
  // add event handler
  // add query selector
  const handleClick = () => {
    const thisOne = id
    console.log(thisOne, 'hi');
    console.log(id)
  };

  return (
    <div className='movie-card' onClick={handleClick}>
      <img src={moviePoster} className='movie-poster' alt={movieTitle} id={id}/>
      <h3>
        {movieTitle}
      </h3>
    </div>
  )
}

export default Card; ter