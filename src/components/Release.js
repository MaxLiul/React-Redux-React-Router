import React, { Component } from 'react';

export default class Release extends Component {
  static propTypes = {
    params: React.PropTypes.object,
    genre: React.PropTypes.object,
    match: React.PropTypes.object
  }
  render() {
    const releaseName = this.props.match.params.release;

    console.log(`Release  ${this.props.match.params.release}`);
    return (
      <div className='col-md-12'>
        {releaseName}
      </div>
    );
  }
}
