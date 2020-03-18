import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsItem = props.posts.map((post) => <Post name={post.name} lastName={post.lastName}
                                                    likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={css.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea wrap="off" cols="30" rows="5"
                              placeholder="Here will be your message"
                              className={css.postTextarea}
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button className={css.postButton} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsItem}
            </div>
        </div>
    )

};

export default MyPosts;