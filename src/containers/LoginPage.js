import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from 'actions/UserActions';
import { withRouter } from 'react-router';

class LoginPage extends Component {

  static propTypes = {
    actions: React.PropTypes.object
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.login({ name: e.target.elements[0].value });
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <form className='form-inline' onSubmit={::this.handleSubmit}>
            <input className='form-control' type='text' placeholder='login'/>{' '}
            <button className='btn btn-primary' type='submit'>Войти</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
