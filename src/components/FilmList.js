import React from 'react';

import Film from './Film.js';

class FilmList extends React.Component {
  render() {
    const filmNodes = this.props.films.map(function (film) {
      return ( 
        <Film key={film.id} title={film.title} url={film.url}>
        </Film>
      )
    })

    return (
      <div className="film-list">

        { filmNodes }
      </div>
    );
  }
}

export default FilmList;
