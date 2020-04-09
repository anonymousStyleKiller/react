import {apiMe} from "../api/api";

const addPost = "ADD-POST";
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    newPostText: "",
    postsData: [
        {id: 1, name: "Anton ", lastName: "Kharchenko ", likesCount: "0"},
        {id: 2, name: "Alex ", lastName: "Glinka ", likesCount: "23"}
    ],
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 3,
                name: "Name",
                lastName: state.newPostText,
                likesCount: 10
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case updateNewPostText:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const SetUserProfileThunk = (userId)=>{
    return (dispatch) =>{
        apiMe.profile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;