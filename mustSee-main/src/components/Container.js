import React from 'react'
import SearchBox from './SearchBox/SearchBox';
import MovieList from './Favorites/Favorites';

const Container = () => {
  return (
    <div className='container'>
      <SearchBox />
      <MovieList />
    </div>
  )
}

export default Container;