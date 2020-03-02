import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
           <h3> My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post name="Anton" lastname="Kharchenko" likesCount={0}/>
                <Post name="Alex" lastname="Glinka" likesCount={23}/>
            </div>
        </div>
    )

}

export default MyPosts;