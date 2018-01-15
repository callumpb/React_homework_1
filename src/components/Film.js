import React from 'react';

class Film extends React.Component {

  render() {
    return (
      <div className="film">
        <h5><img src="add.png"></img>&nbsp;&nbsp;{this.props.title} &nbsp;&nbsp; <a href={this.props.url}>Showtimes</a></h5>
      </div>
    )
  }

}

export default Film;
