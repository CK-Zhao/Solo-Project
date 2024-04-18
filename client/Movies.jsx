import React from 'react';
// import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
const fetch = require('node-fetch');

let moviesdata;
const url =
  'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDk3OTE4MjRhNGIzMDA2MjlmMjYwZjk2NTM3MjIyYiIsInN1YiI6IjY1ZThmYzUwNWFiYTMyMDE4NjZmMzMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RYHijcu2JPH0loE1mDGi1gqrD5vkfOoCosQddKaa38E',
  },
};
const getData = (url, options) => {
  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json.results;
    })
    .catch((err) => console.error('error:' + err));
};
moviesdata = await getData(url, options);
console.log(moviesdata);
const display = [];
for (let i = 0; i < moviesdata.length; i++) {
  display.push(<Card film={moviesdata[i]} key={moviesdata[i] + i} />);
}

const Movies = () => {
  return (
    <div className='mainContainer'>
      <h1 style={h1style}>Welcome to Super Movie Fan</h1>
      <button style={buttonStyle}>
        <Link to='/mylist'>My Movie Wish List</Link>
      </button>
      <div style={styles}>
        <Link to='/movie'>Top Rated</Link>
        <Link to='/movie'>Popular Now</Link>
        <Link to='/movie'>Up Coming</Link>
      </div>
      <div>{display}</div>
    </div>
  );
};

const buttonStyle = {
  margin: '10px 0px',
};

const h1style = {
  textAlign: 'center',
};

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
};

const color = {
  backgroundColor: '',
};
export default Movies;
