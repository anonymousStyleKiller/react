import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }else {
        debugger;
        return (
            <div>
                <div>
                    <img alt="" src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
                </div>
                <div className={css.descriptionBlock}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
            </div>
        )
    }
};

export default ProfileInfo;