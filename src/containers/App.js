import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from 'components/User';
import Page from 'components/Page';
import * as pageActions from 'actions/PageActions';
// const pageActions = require('actions/PageActions');

console.log(pageActions);
class App extends Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    page: React.PropTypes.object.isRequired,
  //  setYear: React.PropTypes.object.isRequired,
    pageActions: React.PropTypes.object.isRequired
  }

  render() {
    const { user, page } = this.props;
    const { setYear }  = this.props.pageActions;

    console.log(this.props);
//    const { year, photos } = this.props.page;


    return (
      <div>
        <User name = {user.name}/>
        <Page photos = {page.photos} year = {page.year} setYear = {setYear}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

    user: state.user,
    page: state.page
  };
}

function mapDispatchToProps(dispatch) {
  return ({
    pageActions: bindActionCreators(pageActions, dispatch)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
