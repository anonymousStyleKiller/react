import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsData = [
        {id: "1", name: "Anton", lastName: "Kharchenko", likesCount: "0"},
        {id: "2", name: "Alex", lastName: "Glinka", likesCount: "23"},
    ];

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
                <Post name={postsData[0].name} lastname={postsData[0].lastName} likesCount={postsData[0].likesCount}/>
                <Post name={postsData[1].name} lastname={postsData[1].lastName} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )

}

export default MyPosts;