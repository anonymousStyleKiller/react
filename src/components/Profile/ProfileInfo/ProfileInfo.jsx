import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={css.descriptionBlock}>
                    <div className={css.profileInfo}>
                        <div className={css.contacts}>
                            <ul>
                                <li>{props.profile.contacts.facebook}</li>
                                <li>{props.profile.contacts.twitter}</li>
                                <li>{props.profile.contacts.instagram}</li>
                            </ul>
                        </div>
                        <div>
                            <img className={css.photoProf} src={props.profile.photos.large} alt=""/>
                            <div className={css.fullName}>
                                {props.profile.fullName}
                            </div>
                            <ProfileStatus status={"Hello my friend"}/>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
};

export default ProfileInfo;