import React from 'react';
import { connect } from 'react-redux';
import { ROUTING } from 'constants/Routing';

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      user: React.PropTypes.object,
      dispatch: React.PropTypes.func
    }

    componentWillMount() {
      this.checkAuth(this.props.user);
    }
    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.user);
    }
    checkAuth(user) {
      if (!user.isAuthenticated) {
        this.props.dispatch({
          type: ROUTING,
          payload: {
            nextUrl: '/login'
          }
        });
      } else {
        this.props.dispatch({
          type: ROUTING,
          payload: {
            nextUrl: '/admin'
          }
        });
      }
    }
    render() {
      return (
        <div>
          {this.props.user.isAuthenticated === true
           ? <Component {...this.props} />
           : null
}
        </div>
      );
    }
}
  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }
  return connect(mapStateToProps)(AuthenticatedComponent);
}
