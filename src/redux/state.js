import {renderEntireTree} from "./../render";

let state = {
    profilePage: {
        newPostText:"it-toxa.com",
        postsData: [
            {id: "1", name: "Anton", lastName: "Kharchenko", likesCount: "0"},
            {id: "2", name: "Alex", lastName: "Glinka", likesCount: "23"}
        ]
    },
    dialogsPage: {
        message: [
            {id: "1", message: "Hi"},
            {id: "2", message: "How are you?"},
            {id: "3", message: "Hello"},
            {id: "4", message: "Yo"},
            {id: "5", message: "Privet"},
        ],
        dialogs: [
            {id: "1", name: "Anton"},
            {id: "2", name: "Dima"},
            {id: "3", name: "Sasha"},
            {id: "4", name: "Nadya"},
            {id: "5", name: "Artem"},
        ]
    }

};

window.state = state;

export let addPost = () =>{
    let newPost = {
        id:"3",
        name: "Jhon",
        lastName: state.profilePage.newPostText,
        likesCount: 15
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export  let updateNewPostText =(newText)=>{
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export default state;