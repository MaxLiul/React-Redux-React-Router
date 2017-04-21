import React, { Component } from 'react';
console.log(`localStorageIndexUp ${window.localStorage.getItem('rr_login')}`);
export default class Login extends Component {
  handleSubmit(e) {
    console.log(`localStorageIndexDown ${window.localStorage.getItem('rr_login')}`);
    e.preventDefault();
    const value = e.target.elements[0].value;

    window.localStorage.setItem('rr_login', value);
  }
  render() {
    return (


      <div className='row'>
        <div className='col-md-12'>Пожалуйста, введите логин:</div>
        <form className='col-md-4' onSubmit={::this.handleSubmit}>
          <input type='text' placeholder='login'/>
          <button type='submit'>Войти</button>
        </form>
      </div>
    );
  }
}
