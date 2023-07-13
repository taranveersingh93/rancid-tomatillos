import './MovieDetails.css';
import backIcon from '../../images/back-icon.png';
import { humanizeDate, findMovie } from '../../helperFunctions';
import { useEffect, useState } from 'react';
import { checkServerError } from '../../helperFunctions';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom'


const MovieDetails = ({ goToHomeView, getData }) => {
  const [dataArrived, setDataArrived] = useState(false);
  const [details, setDetails] = useState({});
  const [serverError, setServerError] = useState(false);

  const chosenID = useParams().id

  useEffect(() => {
    // console.log(dataArrived)
  }, [dataArrived])

  useEffect(() => {
    
    getData(`movies/${chosenID}`)
      .then(data => {
        if (checkServerError(data)) {
          setServerError(true)
        } else {
          const fetchedMovie = data.movie
          setDetails(fetchedMovie);
          setDataArrived(true);
        }
      })
  }, [])

  const SingleMovieError = () => {
    return (
      (<h3 className='error-message'>Sorry, movie details could not be loaded</h3>)
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
          {/* <img src={details.backdrop_path}/> */}
        </div>
        <div className="details-content">
        
          <div className='back-icon-container'>
            <Link to='/' >
              <img src={backIcon}/>
            </Link>
          </div>
          
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
    )
  }

  return (<>
    {dataArrived && <DetailedView details={details}/>}
    {serverError && <SingleMovieError />}
  </>)
}

MovieDetails.propTypes = {
  chosenMovie: PropTypes.object,
  goToHomeView: PropTypes.func,
  getData: PropTypes.func
}

export default MovieDetails