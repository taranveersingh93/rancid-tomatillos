import './MovieDetails.css';
import backIcon from '../../images/back-icon.png';
import { humanizeDate } from '../../helperFunctions';
import { useEffect, useState } from 'react';
import { checkServerError } from '../../helperFunctions';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom'
import Loader from '../LoadSpinner/LoadSpinner';

const MovieDetails = ({ goToHomeView, getData }) => {
  const [details, setDetails] = useState({});
  const [serverError, setServerError] = useState(false);
  const [waitingForSingleFetch, setWaitingForSingleFetch] = useState(true);

  const chosenID = useParams().id

  useEffect(() => {
    
    getData(`movies/${chosenID}`)
      .then(data => {
        if (data.movie) {
          const fetchedMovie = data.movie
          setDetails(fetchedMovie);
          setWaitingForSingleFetch(false)
        } else {
          setServerError(true);
          setWaitingForSingleFetch(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setServerError(true);
        setWaitingForSingleFetch(false);
      })
  }, [])

  const SingleMovieError = () => {
    return (
      (<h3 className='error-message' id='error-message'>Sorry, movie details could not be loaded</h3>)
    )
  }

  const DetailedView = ({details}) => {
    const backgroundStyle = {
      background: `url(${details.backdrop_path}) no-repeat top center`,
      height: '100vh',
      width: '100vw',
      opacity: 0.2,
    }
    
    return (
      <div className='single-movie-view'>
        <div className='single-movie-background' style={backgroundStyle}> 
        </div>
        <div className="details-content">
        
          <div className='back-icon-container'>
            <Link to='/' >
              <img src={backIcon}/>
            </Link>
          </div>
          <div className='sub-details'>
            <div className='movie-details-poster-container'>
              <img src={details.poster_path} className='details-movie-poster' alt={details.title} id={details.id}/>
            </div>
            <div className='details'>
              <h2 className='movie-details-title'>
                {`${details.title}`}
              </h2>
              <div className='release-date'>
                Released on {`${humanizeDate(details.release_date)}`}
              </div>
              <h3 className='rating'>
                Average Rating: {details.average_rating.toFixed(1)} / 10
              </h3>
              <p className='movie-description'> 
                {details.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (<>
    {waitingForSingleFetch && <Loader />}
    {!waitingForSingleFetch && !serverError && <DetailedView details={details}/>}
    {!waitingForSingleFetch && serverError && <SingleMovieError />}
  </>)
}

MovieDetails.propTypes = {
  chosenMovie: PropTypes.object,
  goToHomeView: PropTypes.func,
  getData: PropTypes.func
}

export default MovieDetails