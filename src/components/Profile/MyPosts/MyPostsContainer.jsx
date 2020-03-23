import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profileReducer";




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch.addPostActionCreator()
        }
    }
};

let MyPostsContainer = connect(mapDispatchToProps, mapStateToProps)(MyPosts);

export default MyPostsContainer;