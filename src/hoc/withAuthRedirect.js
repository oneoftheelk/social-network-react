import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuthorized) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }
    let connectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return connectedAuthRedirectComponent;
}