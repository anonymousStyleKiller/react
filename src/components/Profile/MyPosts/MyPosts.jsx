import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsData = [
        {id: "1", name: "Anton", lastName: "Kharchenko", likesCount: "0"},
        {id: "2", name: "Alex", lastName: "Glinka", likesCount: "23"}
    ];

    
    let postsItem = postsData.map((post)=><Post  name={post.name} lastName={post.lastName} likesCount={post.likesCount}/>);

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
                {postsItem}
            </div>
        </div>
    )

}

export default MyPosts;