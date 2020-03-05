import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsItem = props.postsData.map((post) => <Post name={post.name} lastName={post.lastName}
                                                        likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () =>{
       let text = newPostElement.current.value;    
       alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItem}
            </div>
        </div>
    )

}

export default MyPosts;