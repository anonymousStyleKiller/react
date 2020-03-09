import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsItem = props.postsData.map((post) => <Post name={post.name} lastName={post.lastName}
                                                        likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    };

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement} value={props.newPostText}/>
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