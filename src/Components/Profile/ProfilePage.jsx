import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import style from './ProfilePage.module.css';

const ProfilePage = (props) => {
    return (
        <div>
            {/* <div>
                <img className={style.background} src="https://funkyimg.com/i/2VBgT.jpg" alt="" />
            </div> */}
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
}

export default ProfilePage;