import AllMovies from '../AllMovies/AllMovies';
import MovieDetails from '../MovieDetails/MovieDetails';
import Navbar from '../Navbar/Navbar';
import './App.css';
import { useState, useEffect } from 'react';
import "@fontsource/monoton";
import { getData } from '../.././apiCalls/apiCalls'
import { checkServerError } from '../../helperFunctions';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([])
  const [serverError, setServerError] = useState(false);
  const [waitingForFetch, setWaitingForFetch] = useState(true);
  // add states
  const [selectedRating, setSelectedRating] = useState('')

  let chosenMovieId

  useEffect(() => {
    getData('movies')
      .then(data => {
        if (checkServerError(data)) {
          setServerError(true);
          setWaitingForFetch(false);
        } else {
          setMovies(data.movies);
          setAllMovies(data.movies);
          setWaitingForFetch(false);
        }
      })
  }, [])

  const filterMovies = (keyword, movieList) => {
    return [...movieList].filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()))
  }

  const filterByRating = (rating, movieList) => {
    return [...movieList].filter(movie => movie.average_rating >= rating)
  }

  const changeSearch = value => {
    setSearchValue(value);
    setMovies(filterMovies(value, allMovies));
  }
  
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
            <Route path='/:id' element={<MovieDetails getData={getData}/>} />
            <Route path='/' element={<AllMovies waitingForFetch={waitingForFetch} serverError={serverError} changeSearch={changeSearch} movies={movies} searchValue={searchValue}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;