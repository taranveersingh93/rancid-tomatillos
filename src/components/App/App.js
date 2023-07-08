import movieData from '../../data';
import AllMovies from '../AllMovies/AllMovies';
import MovieDetails from '../MovieDetails/MovieDetails';
import Navbar from '../Navbar/Navbar';
import './App.css';
import { useState } from 'react';
import "@fontsource/monoton";

const App = () => {

  // make a movie card, pass in props - return the card structure in JSX
  // iterate through the moviesData array, returning the data as cards, assign props in JSX
  const [onHomeView, setOnHomeView] = useState(true);
  const [onDetailsView, setOnDetailsView] = useState(false);
  const [movies, setMovies] = useState(movieData.movies);
  const [chosenMovie, setChosenMovie] = useState('')

  // make a function that will change state of app in app file
  // pass it down as a prop to moviedeets

  // move all the other stuff into moviedetails file
  // call the changestate func

  let chosenMovieId

  const handleClick = (event) => {

    chosenMovieId = event.target.id
    setChosenMovie(findMovie(chosenMovieId))
    
    setOnDetailsView(true)
    setOnHomeView(false)
  };
  
  const findMovie = (chosenMovieId) => {

    const filteredMovieData = movies.find((movie) => {

      return movie.id === parseInt(chosenMovieId)
    })

    return filteredMovieData
  }
  
  return (
    <div className="App">
      <Navbar />
      <main>
        {onHomeView && <AllMovies movies={movies} handleClick={handleClick}/>}
        {onDetailsView && <MovieDetails chosenMovie={chosenMovie}/>}
      </main>
    </div>
  );
}

export default App;