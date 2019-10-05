import React from 'react';
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends';
import style from './Nav.module.css';

const Nav = (props) => {
    let friendsElement = props.friends.map( item => {
        return <Friends key={item.id} id={item.id} name={item.name} />
    });

    let linksElement = props.links.map( link => {
        return <div className={link.linkTo === "/friends" && style.friendsNav}>
            <NavLink to={link.linkTo}
                onClick={() => changeLink(link.id)}
                activeClassName="active"
                className={link.id === props.activeLink && style.active}>
                {`${link.linkTo.slice(1, 2).toUpperCase()}${link.linkTo.slice(2)}`}
            </NavLink>
        </div>
    });

    const changeLink = (newActiveLink) => {
        props.changeLink(newActiveLink);
    }

    return (
        <nav className={style.nav}>
            {linksElement}
            <div className={style.friends}>
                {friendsElement}
            </div>        
        </nav>
    );
}

export default Nav;