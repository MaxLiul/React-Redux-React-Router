import React from 'react';
import { connect } from 'react-redux';

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      user: React.PropTypes.object
    }
    render() {
      console.log(this.props.user.isAuthenticated);
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
