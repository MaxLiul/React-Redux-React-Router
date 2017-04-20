import React, { Component } from 'react';
import NavLink from 'components/NavLink';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.array.isRequired
  }
  render() {
    return (
      <div className='container'>
        <ul className = 'nav nav-pills'>
          <li><NavLink to='/'>Главная</NavLink></li>
          <li><NavLink to='/admin' className='active'> Админка </NavLink></li>
          <li><NavLink to='/login'>Войти</NavLink></li>
          <li><NavLink to='/list' className='active' > Список жанров </NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
