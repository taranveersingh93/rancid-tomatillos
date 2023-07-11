import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

AOS.init();

const Card = ({ movieTitle, moviePoster, movieYear, id, handleClick }) => {
  return (
    <div className='movie-card' data-aos="fade-up">
      <div className='movie-card-image-container'>
        <Link to={`/${id}`} >
          <img src={moviePoster} className='movie-poster' alt={movieTitle} id={id} onClick={event => handleClick(event)}/>
        </Link>
      </div>
      <h3 className='movie-title'> {`${movieTitle} (${movieYear})`}</h3>
    </div>
  )
}

Card.propTypes = {
  movieTitle: PropTypes.string,
  moviePoster: PropTypes.string,
  movieYear: PropTypes.string,
  id: PropTypes.number,
  handleClick: PropTypes.func
}

export default Card;