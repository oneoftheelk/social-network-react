import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = `/dialogs/id${props.id}`
    return (
        <div>
            <NavLink to={path} activeClassName="active">{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;