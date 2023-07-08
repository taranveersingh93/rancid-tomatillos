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
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState(movieData.movies);

  const filterMovies = (keyword, movieList) => {
    return [...movieList].filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()))
  }

  const changeSearch = value => {
    setSearchValue(value);
    setMovies(filterMovies(value, movieData.movies));
  }
  
  return (
    <div className="App">
      <Navbar />
      <main>
        {onHomeView && <AllMovies changeSearch={changeSearch} movies={movies}/>}
        {/* {onDetailsView && <MovieDetails />} */}
      </main>
    </div>
  );
}

export default App;