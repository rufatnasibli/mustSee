import React from 'react';
import { useSelector} from 'react-redux';
import './MovieList.css';

const MovieList = () => {
    const addedMovies = useSelector(state => state.list);
    const addedMoviesArray = [...addedMovies.movies];

    return (
        <div className='movie-container'>
            <h1>Мой список ({addedMoviesArray.length})</h1>

            <div className='movie-list movies'>

                {addedMoviesArray.length === 0 ? <h2>Список фильмов пуст</h2> : addedMoviesArray.map(movie => {
                    return (
                        <div className='movie-item' key={movie.movie.imdbID}>
                            <div className="movie-item-info">
                                <div className="first-block">
                                    <h2>{movie.movie.Title}({movie.movie.Year})</h2>
                                </div>

                                <div className='bottom-group'>
                                    <a className='link' rel='noreferrer' target='_blank' href={`https://www.imdb.com/title/${movie.movie.imdbID}/`}>Oткрыть</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default MovieList;