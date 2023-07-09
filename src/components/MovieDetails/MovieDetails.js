import './MovieDetails.css';
import backIcon from '../../images/back-icon.png';
import { humanizeDate } from '../../helperFunctions';
import { useEffect, useState } from 'react';


const MovieDetails = ({ chosenMovie, goToHomeView, getData }) => {
  const [dataArrived, setDataArrived] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const chosenID = chosenMovie.id
    getData(`movies/${chosenID}`)
      .then(data => {
        const fetchedMovie = data.movie
        setDetails(fetchedMovie);
        setDataArrived(true);
      })
  }, [])

  const DetailedView = ({details}) => {
    return (
      <div className='single-movie-view'>
        <div className='single-movie-background'> 
          <img src={chosenMovie.backdrop_path}/>
        </div>
        <div className="details-content">
          <div className='back-icon-container' onClick={() => {goToHomeView(true)}}>
            <img src={backIcon}/>
          </div>
          <div className='movie-details-poster-container'>
            <img src={chosenMovie.poster_path} className='details-movie-poster' alt={chosenMovie.title} id={chosenMovie.id}/>
          </div>
          <div className='details'>
            <h2 className='movie-details-title'>
              {`${chosenMovie.title}`}
            </h2>
            <div className='release-date'>
              Released on {`${humanizeDate(chosenMovie.release_date)}`}
            </div>
            <h3 className='rating'>
              Average Rating: {chosenMovie.average_rating.toFixed(1)} / 10
            </h3>
            <p className='movie-description'> 
            This is placeholder text:
            Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.</p>
          </div>
        </div>
      </div>
    )
  }
  return (<>
    {dataArrived && <DetailedView />}
  </>)
}

export default MovieDetails