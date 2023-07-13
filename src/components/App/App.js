import movieData from '../../data';
import AllMovies from '../AllMovies/AllMovies';
import MovieDetails from '../MovieDetails/MovieDetails';
import Navbar from '../Navbar/Navbar';
import './App.css';
import { useState, useEffect } from 'react';
import "@fontsource/monoton";
import ErrorGrid from '../AllMovies/AllMovies'
import { getData } from '../.././apiCalls/apiCalls'
import { checkServerError } from '../../helperFunctions';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [onHomeView, setOnHomeView] = useState(true);
  const [onDetailsView, setOnDetailsView] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [chosenMovie, setChosenMovie] = useState('')
  const [allMovies, setAllMovies] = useState([])
  const [serverError, setServerError] = useState(false);

  let chosenMovieId

  useEffect(() => {
    getData('movies')
      .then(data => {

        if (checkServerError(data)) {
          setServerError(true);
        } else {

          setMovies(data.movies)
          setAllMovies(data.movies)
        }
      })
  }, [])

  const goToHomeView = value => {
    setOnDetailsView(!value);
    setOnHomeView(value);
  }

  const handleClick = (event) => {
    // chosenMovieId = event.target.id
    // setChosenMovie(findMovie(chosenMovieId))
    goToHomeView(false);
  };


  const filterMovies = (keyword, movieList) => {
    return [...movieList].filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()))
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
            <Route path='/:id' element={<MovieDetails goToHomeView={goToHomeView} getData={getData}/>} />
            <Route path='/' element={onHomeView && <AllMovies serverError={serverError} changeSearch={changeSearch} movies={movies} searchValue={searchValue} handleClick={handleClick} />} />
        </Routes>
      </main>


      

    </div>
  );
}

export default App;