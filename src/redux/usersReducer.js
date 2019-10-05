import { usersAPI } from '../api/api';

const ADD_TO_FRIENDS = 'ADD_TO_FRIENDS';
const REMOVE_FROM_FRIENDS = 'REMOVE_FROM_FRIENDS';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case ADD_TO_FRIENDS: {
            return {
                ...state,
                users: state.users.map( user => user.id === action.userId ? {...user, followed: true} : user )
            };
        }
        case REMOVE_FROM_FRIENDS: {
            return {
                ...state,
                users: state.users.map( user => user.id === action.userId ? {...user, followed: false} : user )
            };
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: {
            return state;
        }
    }
}

export const addToFriends = (userId) => ({type: ADD_TO_FRIENDS, userId});
export const removeFromFriends = (userId) => ({type: REMOVE_FROM_FRIENDS, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
};

export const addUserToFriends = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.addToFriends(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(addToFriends(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}

export const removeUserFromFriends = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.removeFromFriends(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(removeFromFriends(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}

export default usersReducer;