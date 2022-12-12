import React, { useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './SearchBox.css';

const SearchDiv = () => {

    const [input, setInput] = useState('');
    const [movieData, setMovieData] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const changeHandler = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://www.omdbapi.com/?apikey=f950f21e&s=' + input);
            const data = await response.json();
            setMovieData(data.Search);
        }
        getData();
    });

    return (
        <div className='search-section'>
            <div className='search-group'>
                <form onSubmit={submitHandler}>
                    <input onChange={changeHandler} type='text' placeholder='Искать фильм по названию..' className='search-bar' />
                </form>

                <div className='movie-list'>
                    {movieData === undefined ? <p></p> : movieData.map((movie) => {
                        return (
                            <div key={movie.imdbID}>
                                <MovieItem
                                    movie={movie}
                                />
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchDiv;