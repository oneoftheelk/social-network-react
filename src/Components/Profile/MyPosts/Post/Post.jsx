import React from 'react';
import style from './Post.module.css';
import avatar from './../../../../Assets/Images/avatar.png';

const Post = (props) => {
    return (
        <div>
            <div className={style.avatarSmall}>
                <img src={avatar} alt="" />
                <div>{props.message} ❤{props.likeCount}</div>
            </div>
        </div>
    );
}

export default Post;