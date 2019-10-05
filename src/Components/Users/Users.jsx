import React from 'react';
import styles from './Users.module.css';
import avatar from './../../Assets/Images/avatar.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.userPages}>
                {pages.map(page => {
                    return <span
                        onClick={() => props.onPageChange(page)}
                        className={props.currentPage === page ? styles.selectedPage : ""}>{page} </span>
                })}
            </div>
            {props.users.map(user =>
                <div key={user.id} className={styles.container}>
                    <div className={styles.item}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small || avatar} className={styles.userPhoto} alt="userPhoto" />
                        </NavLink>
                    </div>
                    <div className={styles.item}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={styles.item}>
                        <div>{"country, city"}</div>
                    </div>
                    <div className={styles.item}>
                        {!user.followed
                            ? <button
                                disabled={props.followingInProgress.some( id => id === user.id )}
                                onClick={() => { props.addUserToFriends(user.id) }}>Add</button>
                            : <button 
                                disabled={props.followingInProgress.some( id => id === user.id )}
                                onClick={() => { props.removeUserFromFriends(user.id) }}>Remove</button>}
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;