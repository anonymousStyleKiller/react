import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


let AddNewMessageBody = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea" type="text"/>
            </div>
            <div>
                <button  className={css.postButton}>Add post</button>
            </div>
        </form>
    );
}

 AddNewMessageBody = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewMessageBody);

const MyPosts = (props) => {
    let postsItem = props.posts.map((post) => <Post key={post.id} message={post.message}
                                                    likesCount={post.likesCount}/>);


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={css.postsBlock}>
            <h3> My posts </h3>
            <AddNewMessageBody onSubmit={onAddPost}/>
            <div className={css.posts}>
                {postsItem}
            </div>
        </div>
    )
};


export default MyPosts;