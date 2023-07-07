import movieData from '../../data';
import Movies from '../Movies/Movies';
import Navbar from '../Navbar/Navbar';
import './App.css';
import { useState } from 'react';
import "@fontsource/monoton";

const App = () => {

  // make a movie card, pass in props - return the card structure in JSX
  // iterate through the moviesData array, returning the data as cards, assign props in JSX
  const [onHomeView, setOnHomeView] = useState(true);
  const [movies, setMovies] = useState(movieData.movies);
  
  return (
    <div className="App">
      <Navbar />
      <main>
        {onHomeView && <Movies movies={movies}/>}
      </main>
    </div>
  );
}

export default App;