import React, {useContext}from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({ movie }) => {
  const { addMovie, watchlist, watched, addMovieToWatched } = useContext(GlobalContext)
  let storedMovie = watchlist.find(object => object.id === movie.id);
  let storeMovieWatched = watched.find(object => object.id === movie.id);

  const watchlistDisabled = storedMovie ? true : storeMovieWatched ? true : false;

  const watchedDisabled = storeMovieWatched ? true : false;

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
              {movie.release_date ? movie.release_date.substring(0,4) : '-' }
          </h4>
        </div>

        <div className='controls'>
            <button className='btn' onClick={()=> {addMovie(movie)}} disabled={watchlistDisabled}>
             Add to Watchlist
            </button>
            <button className='btn' onClick={()=> {addMovieToWatched(movie)}} disabled={watchedDisabled}>
             Watched
            </button>


        </div>
      </div>
    </div>
  );
};
