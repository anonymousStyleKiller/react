import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../storeContext";


const MyPostsContainer = () => {
    return (
        <storeContext.Consumer>
            { (store) => {
                    let state = store.getState().profilePage;
                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                    let addPost = () => {
                        debugger;
                        store.dispatch(addPostActionCreator());
                    };
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.postsData}
                                 newPostText={state.newPostText}/>
                    );
                }
            }
        </storeContext.Consumer>
    )

};

export default MyPostsContainer;