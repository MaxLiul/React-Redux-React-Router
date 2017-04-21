import React, { Component } from 'react';

export default class Genre extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    genre: React.PropTypes.object,
    match: React.PropTypes.object,
    children: React.PropTypes.array
  }
  render() {
    console.log(`childrenGenre ${this.props.children}`);
    let template;


    if (this.props.match.params.release) {
      template = (
        <div className='row'>
          <h3 className='col-md-12'>{this.props.match.params.genre}</h3>
          <div className='col-md-12'>{this.props.children}</div>
        </div>
     );
    } else {
      template = (
        <div className='row'>
          <h3 className='col-md-12'>{this.props.match.params.genre}</h3>
          <div className='col-md-12'>Здесь будет список релизов</div>
        </div>
    );
    }
    return template;
  }
}
