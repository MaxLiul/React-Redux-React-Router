import React, { Component } from 'react';
import NavLink from 'components/NavLink';
import 'styles/app.css';
export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.object
  }

  render() {
    console.log('Max');
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
