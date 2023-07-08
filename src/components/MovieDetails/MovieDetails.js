import './MovieDetails.css';
import backIcon from '../../images/back-icon.png'

const MovieDetails = ({ chosenMovie }) => {

  const humanizeDate = (date) => {
    const inputDate = date.toString();
    const year = inputDate.slice(0,4);
    const month = inputDate.slice(5,7);
    const newDate = inputDate.slice(8);
    const months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    };
    return `${months[month]} ${newDate}, ${year}`;
  }

  return (
    <div className='single-movie-view' >
      
      <div className='single-movie-background'>
        <img src={chosenMovie.backdrop_path}/>
      </div>
      <div className="details-content">
        <div className='back-icon-container'>
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

  // return (
  //   <div className='movie-details-card' style={{ 
  //       backgroundImage: `url(${chosenMovie.backdrop_path})`
  //     }}>
        // <div className="details-content">
        //   <div className='movie-details-poster-container'>
        //     <img src={chosenMovie.poster_path} className='details-movie-poster' alt={chosenMovie.title} id={chosenMovie.id}/>
        //   </div>
        //   <div className='details'>
        //     <h2 className='movie-details-title'>
        //       {`${chosenMovie.title}`}
        //     </h2>
        //     <div className='release-date'>
        //       Released on {`${humanizeDate(chosenMovie.release_date)}`}
        //     </div>
        //     <h3 className='rating'>
        //       Average Rating: {chosenMovie.average_rating.toFixed(1)} / 10
        //     </h3>
        //     <p className='movie-description'> 
        //     This is placeholder text:
        //     Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.</p>
        //   </div>
        // </div>
    // </div>
  // )
}

export default MovieDetails