import movieData from './data';
import Movies from './Movies'
import './App.css';
import { useState } from 'react';

function App() {

  // make a movie card, pass in props - return the card structure in JSX
  // iterate through the moviesData array, returning the data as cards, assign props in JSX

  const [moviesList, setMovies] = useState(movieData.movies);

  return (
    <div className="App">
      <Movies movies={moviesList}/>
    </div>
  );
}

export default App;