import React from 'react';
import Header from "./Header";
import { authorizeMe, logout } from './../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authorizeMe();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
    login: state.auth.login
})

export default connect(mapStateToProps, {
    authorizeMe, logout
})(HeaderContainer);