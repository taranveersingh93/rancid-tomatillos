import movieData from '../../data';
import Movies from '../Movies/Movies';
import Navbar from '../Navbar/Navbar';
import './App.css';
import { useState } from 'react';

const App = () => {

  // make a movie card, pass in props - return the card structure in JSX
  // iterate through the moviesData array, returning the data as cards, assign props in JSX
  const [movies, setMovies] = useState(movieData.movies);
  const [onHomeView, setOnHomeView] = useState(true);
  const [onDetailsView, setOnDetailsView] = useState(false);

  

  
  // const getMovieDetail = (movies) => {
  //   const chosenMovie = movies.filter((movie) => {

  //   })
  // }

  return (
    <div className="App">
      <Navbar />
      <main>
        {onHomeView && <Movies movies={movies}/>}
        {/* {onDetailsView && <MovieDetails />} */}
      </main>
    </div>
  );
}

export default App;