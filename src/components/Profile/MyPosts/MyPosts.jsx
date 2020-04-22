import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength = maxLengthCreator(50);

let AddNewMessageBody = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                       validate={[required, maxLength]}
                       component={Textarea}
                       placeholder={"What is new in you?"}/>
            </div>
            <div className={css.postButtonOut}>
                <div></div>
                <button className={css.postButton}>Add post</button>
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
            <div className={css.myPost}>
                <h3 className={css.myPostTitle}> My posts </h3>
                <div className={css.posts}>
                    {postsItem}
                </div>
            </div>
            <div className={css.addPost}>
                <h3 className={css.myPostTitle}> Add new post </h3>
                <AddNewMessageBody onSubmit={onAddPost}/>
            </div>
        </div>
    )
};


export default MyPosts;