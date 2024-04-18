import React from 'react';
// import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Wishcard from './Wishcard.jsx';
const fetch = require('node-fetch');

let moviesdata;
const id = ['278', '238'];

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDk3OTE4MjRhNGIzMDA2MjlmMjYwZjk2NTM3MjIyYiIsInN1YiI6IjY1ZThmYzUwNWFiYTMyMDE4NjZmMzMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RYHijcu2JPH0loE1mDGi1gqrD5vkfOoCosQddKaa38E',
  },
};
const display = [];

for (let i = 0; i < id.length; i++) {
  let url = 'https://api.themoviedb.org/3/movie/';
  url = url + id[i];
  const getData = (url, options) => {
    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        return json;
      })
      .catch((err) => console.error('error:' + err));
  };
  moviesdata = await getData(url, options);
  console.log(moviesdata);
  display.push(<Wishcard film={moviesdata} key={moviesdata + i} />);
}

const Mylist = () => {
  return (
    <div className='mainContainer'>
      <h1 style={h1style}>My Movie Wish List</h1>
      <button style={buttonStyle}>
        <Link to='/movie'>Back</Link>
      </button>
      <div>{display}</div>
      {/* <Wishcard film={moviesdata} /> */}
    </div>
  );
};

const buttonStyle = {
  margin: '10px 0px',
};

const h1style = {
  textAlign: 'center',
};
export default Mylist;
