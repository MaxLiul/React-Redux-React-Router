import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from 'components/User';
import Page from 'components/Page';
import * as pageActions from 'actions/PageActions';
import * as userActions from 'actions/UserActions';


class App extends Component {

  static propTypes = {
    user: React.PropTypes.object.isRequired,
    page: React.PropTypes.object.isRequired,
    pageActions: React.PropTypes.object.isRequired,
    userActions: React.PropTypes.object.isRequired
  }

  render() {
    const { user, page } = this.props;
    const  { getPhotos }   = this.props.pageActions;
    const { handleLogin } = this.props.userActions;

    return (
      <div className = 'row'>
        <User name = {user.name} handleLogin = {handleLogin} error={user.error}/>
        <Page photos = {page.photos} year = {page.year} getPhotos = {getPhotos}
          fetching = {page.fetching}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, page } = state;

  return {

    user, // user: state.user
    page // page: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return ({
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
