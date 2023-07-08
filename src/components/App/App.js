import movieData from '../../data';
import AllMovies from '../AllMovies/AllMovies';
import MovieDetails from '../MovieDetails/MovieDetails';
import Navbar from '../Navbar/Navbar';
import './App.css';
import { useState } from 'react';
import "@fontsource/monoton";
import ErrorGrid from '../AllMovies/AllMovies'
const App = () => {

  // make a movie card, pass in props - return the card structure in JSX
  // iterate through the moviesData array, returning the data as cards, assign props in JSX
  const [onHomeView, setOnHomeView] = useState(true);
  const [onDetailsView, setOnDetailsView] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState(movieData.movies);
  const [chosenMovie, setChosenMovie] = useState('')


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

  const filterMovies = (keyword, movieList) => {
    return [...movieList].filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()))
  }

  const changeSearch = value => {
    console.log(searchValue, "before")
    setSearchValue(value);
    console.log(searchValue, "after")
    setMovies(filterMovies(value, movieData.movies));

  }
  
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* {onHomeView && <AllMovies movies={movies}/>} */}
        {onDetailsView && <MovieDetails chosenMovie={chosenMovie}/>}
        {onHomeView && <AllMovies changeSearch={changeSearch} movies={movies} searchValue={searchValue} handleClick={handleClick}/>}
        {/* {onDetailsView && <MovieDetails />} */}
      </main>
    </div>
  );
}

export default App;