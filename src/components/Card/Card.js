import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();

const Card = ({ movieTitle, moviePoster, movieYear, id }) => {
  return (
    <div className='movie-card' data-aos="fade-up">
      <div className='movie-card-image-container'>
        <img src={moviePoster} className='movie-poster' alt={movieTitle} />
      </div>
      <h3 className='movie-title'> {`${movieTitle} (${movieYear})`}</h3>
    </div>
  )
}

export default Card;