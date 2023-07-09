import './MovieDetails.css';
import backIcon from '../../images/back-icon.png';
import { humanizeDate } from '../../helperFunctions';
import { useEffect, useState } from 'react';
import { checkServerError } from '../../helperFunctions';


const MovieDetails = ({ chosenMovie, goToHomeView, getData }) => {
  const [dataArrived, setDataArrived] = useState(false);
  const [details, setDetails] = useState({});
  const [serverError, setServerError] = useState(false);
  
  useEffect(() => {
    // console.log(dataArrived)
  }, [dataArrived])

  useEffect(() => {
    const chosenID = chosenMovie.id
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
    return (
      <div className='single-movie-view'>
        <div className='single-movie-background'> 
          <img src={details.backdrop_path}/>
        </div>
        <div className="details-content">
          <div className='back-icon-container' onClick={() => {goToHomeView(true)}}>
            <img src={backIcon}/>
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

export default MovieDetails