import React from 'react';
import style from './Friends.module.css';
import avatar from './../../../Assets/Images/avatar.png';

const Friends = (props) => {
    return (
        <div className={style.friendsItem}>
            <img src={avatar} alt="friends" />
            <div>{props.name}</div>
        </div>
    )
}

export default Friends;