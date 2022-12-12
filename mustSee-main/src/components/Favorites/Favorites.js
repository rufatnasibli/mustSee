import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromList } from '../../redux/actions/listActions';
import './Favorites.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const PlayList = () => {

    const movies = useSelector(state => state.list);

    const [listName, setListName] = useState('');
    const [isCreated, setIsCreated] = useState(false);


    const movieArray = [...movies.movies];

    const dispatch = useDispatch();

    const handleRemove = (movie) => {
        dispatch(removeFromList(movie));
    }

    const showSuccessOnListCreate = () => {
        setIsCreated(true);
    }

    const showInfoOnListCreate = () => {
        alert("Введите название списка!")
        setIsCreated(false);
    }

    const handleCreateListButton = () => {
        listName === '' ? showInfoOnListCreate() : showSuccessOnListCreate();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleInputOnChange = (e) => {
        e.preventDefault();
        setListName(e.target.value);
    }


    return (
        <div className='play-list' id='down'>
            <div className='list-group'>
                <div className='list-name'>
                </div>
                <div className="list-name-bar">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleInputOnChange} type='text' placeholder='Введите название списка' className='search-bar list-name-bar' disabled={isCreated} />
                    </form>
                </div>
            </div>

            {!isCreated &&
                <div className='movie-list border-none'>
                    {movieArray === undefined ? <p>empty</p> : movieArray.map((movie) => {
                        return (
                            <div key={movie.movie.imdbID}>
                                <div className='movie-card-in-list'>
                                    <div className="card-text">
                                        <div className="card-title">
                                            <h1>{movie.movie.Title}({movie.movie.Year})</h1>
                                        </div>
                                        <button onClick={() => handleRemove(movie.movie)} className='remove-button remove-submit' disabled={isCreated}>Удалять</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            }

            {isCreated ?
                <div className="create-list-button">
                    <NavLink to={`/movielist`} className='button list-button'>Перейти к списку "{listName.length > 0 ? listName : 'list'}"</NavLink>
                </div>
                :
                <div className="create-list-button">
                    <button onClick={() => handleCreateListButton()} className='button search-submit'>Сохранить список</button>
                </div>
            }
        </div>
    );
}

export default PlayList;