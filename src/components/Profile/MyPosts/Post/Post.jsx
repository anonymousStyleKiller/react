import React from 'react';
import css from './Post.module.css';
import ava from '../../../../assets/images/icons8-old-man-64.png';

const Post = (props) => {

    return (
        <div className={css.item}>

            <img src={ava}/>
            <div>
                <div className={css.message}>
                    {props.message}
                </div>
                <div className={css.likesCount}>
                    {props.likesCount}
                    <span> 	&#9829;</span>
                </div>
            </div>
        </div>

    )
}

export default Post;