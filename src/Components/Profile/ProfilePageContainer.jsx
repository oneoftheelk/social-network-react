import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setChosenUserProfile, getStatus, updateStatus } from './../../redux/profileReducer';
import ProfilePage from './ProfilePage';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userID || 1511;
        this.props.setChosenUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <ProfilePage {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setChosenUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);