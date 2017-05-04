import React, { Component } from 'react';
export default class Login extends Component {
  static propTypes = {
    history: React.PropTypes.object
  }

  handleSubmit(e) {
    e.preventDefault();
    const login = e.target.elements[0].value;

    window.localStorage.setItem('rr_login', login);
    if (login === 'admin') {
      this.props.history.push('/admin');
    } else {
      this.props.history.push('/');
    }
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
