import React, { Component } from 'react';

export default class Genre extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    genre: React.PropTypes.object,
    match: React.PropTypes.object
  }
  render() {
    console.log(this.props.match);
    return (
      <div className='row'>
        <h3 className='col-md-12'>{this.props.match.params.genre}</h3>
        <div className='col-md-12'>Здесь будет список релизов</div>
      </div>
    );
  }
}
