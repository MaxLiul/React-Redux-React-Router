import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from 'components/User';
import Page from 'components/Page';
import * as pageActions from 'actions/PageActions';
// const pageActions = require('actions/PageActions');


class App extends Component {

  static propTypes = {
    user: React.PropTypes.object.isRequired,
    page: React.PropTypes.object.isRequired,
    pageActions: React.PropTypes.object.isRequired
  }

  render() {
    const { user, page } = this.props;
    const  { getPhotos }   = this.props.pageActions;

    return (
      <div className = 'row'>
        <User name = {user.name}/>
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
    pageActions: bindActionCreators(pageActions, dispatch)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
