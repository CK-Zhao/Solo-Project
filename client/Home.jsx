import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles} className='Home'>
      <div>
        <h1>Welcome to Super Movie Fan</h1>
      </div>
      <div style={divStyle}>
        <input style={buttonStyle} type='text' placeholder='Username' />
        <br />
        <input type='password' placeholder='Password' />
        <br />
        <button style={buttonStyle}>
          <Link to='/signup'>Sign Up</Link>
        </button>
        <button style={buttonStyle}>
          <Link to='/movie'>Sign In</Link>
        </button>
      </div>
    </div>
  );
}

const styles = {
  height: '800px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundImage:
    'url(https://image.tmdb.org/t/p/original//rV8g8ATRPIwUHC1rKRXEXBjbclu.jpg)',
};

const buttonStyle = {
  margin: '10px 20px 10px 0px',
};

const divStyle = {
  margin: '80px 0px 0px 0px',
};

export default Home;
