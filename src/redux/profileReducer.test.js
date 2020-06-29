import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from "react";

let state = {
    postsData: [
        {id: 1, message: "Post 1", likesCount: Math.floor(Math.random() * 10) + 1},
        {id: 2, message: "Post 2", likesCount: Math.floor(Math.random() * 10) + 1}
    ]
};

it('new post should be added', () => {
    let action = addPostActionCreator("it");
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});

it('after deleting length of  messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(1);
});

it(`after deleting length should be  decrement if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});