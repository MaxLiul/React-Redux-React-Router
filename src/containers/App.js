import React, { Component } from 'react';
import  { Link }  from 'react-router-dom';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.array.isRequired
  }
  render() {
    return (
      <div className='container'>
        <h1> App </h1>
        <ul>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/genre'>Genre</Link></li>
          <li><Link to='/list'>List</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
