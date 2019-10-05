import React from 'react';
import style from './ProfileInfo.module.css';
import avatar from '../../../../Assets/Images/avatar.png';
import { Preloader } from '../../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.profileInfo}>
            <div className={style.avatar}>
                <img src={props.profile.photos.small || avatar} alt="" />
            </div>
            <div>
                <div><b>{props.profile.fullName}</b></div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;