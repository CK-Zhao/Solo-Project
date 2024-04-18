import React from 'react';
const Card = (props) => {
  const {
    title,
    original_language,
    popularity,
    release_date,
    vote_average,
    vote_count,
    poster_path,
    overview,
  } = props.film;
  const imgUrl = `https://image.tmdb.org/t/p/original` + poster_path;

  return (
    <article style={styles.container} className='card'>
      <div className='filmHeadContainer'>
        <h3 className='filmName'>{title}</h3>
      </div>
      <div style={stylesA}>
        <div className='filmHeadContainer'>
          <img
            style={imgstyles}
            className='poster'
            src={imgUrl}
            alt='Smiley face'
          ></img>
        </div>
        <ul className='filmDetailsList'>
          <li className='charDetail'>Original_language: {original_language}</li>
          <li className='charDetail'>Popularity: {popularity}</li>
          <li className='charDetail'>Release_date: {release_date}</li>
          <li className='charDetail'>Vote_average: {vote_average}</li>
          <li className='charDetail'>Vote_count: {vote_count}</li>
          <p className='charAddlDetail'>
            Overview: {overview}
            {overview}
          </p>
          <button>Add to wish list</button>
        </ul>
      </div>
    </article>
  );
};

const styles = {
  container: {
    border: '1px black solid',
    width: '97%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    alignItems: 'center',
    padding: '20px',
  },
};

const imgstyles = {
  height: '220px',
  width: '150px',
};

const stylesA = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

export default Card;
