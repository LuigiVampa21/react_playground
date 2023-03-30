import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchData = useCallback(async() => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://react-test-3e7fc-default-rtdb.europe-west1.firebasedatabase.app/movies.json');
        const { data } = response;

        const loadedMovies = [];

        for (const key in data){
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate
          })
        }
        setMovies(loadedMovies);

      } catch (err) {
        console.error(err);
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData])

  const addMovie = async(movie) => {
    const newMovie = await axios.post('https://react-test-3e7fc-default-rtdb.europe-west1.firebasedatabase.app/movies', movie);
    console.log(newMovie);
  }

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
      <AddMovie onAddMovie={addMovie} />
      </section>
      <section>
        <button onClick={fetchData}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movie.</p>}
        {isLoading && <p>Loading..</p>}
        {isError && <p>{isError}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
