import React from 'react';
import style from './MessagesItem.module.css';

const MessagesItem = (props) => {
    let classNameValue = props.from === "me" ? style.MyMessage : style.FriendsMessage;

    return (
        <div className={classNameValue}>{props.message}</div>
    )
}

export default MessagesItem;