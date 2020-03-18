import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    let addPost = () => {
        debugger;
        props.store.dispatch(addPostActionCreator());
    };

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.postsData}
                 newPostText={state.profilePage.newPostText}/>
    )

};

export default MyPostsContainer;