import React from 'react';

import FilmList from './FilmList.js'

class FilmBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      films: [
        {id: 1, title: 'Jumanji', url: 'http://www.imdb.com/showtimes/title/tt2283362?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=0Y07KAVP0T4JPGTX6K1C&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_gs'  },
        {id: 2, title: 'Star Wars', url: 'http://www.imdb.com/showtimes/title/tt2527336?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=0Y07KAVP0T4JPGTX6K1C&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_gs'},
        {id: 3, title: 'The Greatest Showman', url: 'http://www.imdb.com/showtimes/title/tt1485796?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=0Y07KAVP0T4JPGTX6K1C&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_gs'}

      ]
    };
  }

    render() {
    return (

      <div className="film-box">
        <h1>Now Playing (UK Box Office)</h1>

        <FilmList films={ this.state.films } />
        <br></br>
        <hr></hr>

        &nbsp;<a href='http://www.imdb.com/chart/boxoffice?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=0Y07KAVP0T4JPGTX6K1C&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_sm'>See more box office results</a>
      </div>

    );
  }
}

export default FilmBox;
