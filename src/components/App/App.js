import movieData from '../../data';
import AllMovies from '../AllMovies/AllMovies';
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

  return (
    <div className="App">
      <Navbar />
      <main>
        {onHomeView && <AllMovies movies={movies}/>}
        {/* {onDetailsView && <MovieDetails />} */}
      </main>
    </div>
  );
}

export default App;