import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setCurrentPage, toggleFollowingProgress,
    getUsers, addUserToFriends, removeUserFromFriends } from './../../redux/usersReducer';
import Users from './Users';
import { Preloader } from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <> 
            {this.props.isFetching
                ? <Preloader />
                : <Users {...this.props} onPageChange={this.onPageChange} /> }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage, toggleFollowingProgress,
        getUsers, addUserToFriends, removeUserFromFriends
    })
)(UsersContainer)