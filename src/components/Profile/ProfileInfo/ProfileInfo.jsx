import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    <img alt=""
                         src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
                </div>
                <div className={css.descriptionBlock}>
                    <div className={css.profileInfo}>
                            <div className={css.contacts}>
                                <ul>
                                    <li> {props.profile.contacts.facebook}</li>
                                    <li>{props.profile.contacts.twitter}</li>
                                    <li>{props.profile.contacts.instagram}</li>
                                </ul>
                            </div>
                        <div>
                            <img className={css.photoProf} src={props.profile.photos.large} alt=""/>
                            <div className={css.fullName}>
                                {props.profile.fullName}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
};

export default ProfileInfo;