import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    postsData: [
        {id: 1, message: "Post 1",  likesCount: Math.floor(Math.random()*10)+1},
        {id: 2, message: "Post 2", likesCount: Math.floor(Math.random()*10)+1}
    ]
};

it('new post should be added', () => {
    // 1. Test data
    let action = addPostActionCreator("it");


    // 2. Action
    let newState  =   profileReducer(state, action);

    // 3. Expectation
    expect(newState.postsData.length).toBe(3);
});

it('after deleting length of  messages should be decrement', () => {
    // 1. Test data
    let action = deletePost(1);
    // 2. Action
    let newState  =   profileReducer(state, action);

    // // 3. Expectation
    expect(newState.postsData.length).toBe(1);
});