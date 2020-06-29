import {profileAPI} from "../api/api";

const addPost = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        {id: 1, message: "Post 1", likesCount: Math.floor(Math.random() * 10) + 1},
        {id: 2, message: "Post 2", likesCount: Math.floor(Math.random() * 10) + 1}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: Math.floor(Math.random() * 10) + 1
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p =>
                    p.id != action.postId
                )
            };
        default:
            return state;
    }
};

// Добавляет посты
export const addPostActionCreator = (newPostText) => ({type: addPost, newPostText});
// Добавляет профиль
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
// Добавляет статус
export const setStatus = (status) => ({type: SET_STATUS, status});
// Удаляет пост
export const deletePost = (postId) => ({type: DELETE_POST, postId});

// Отправляет на сервер
export const SetUserProfileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.profile(userId)
    dispatch(setUserProfile(response.data));
}

// Получает статус с сервера
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

// Обновляет статус на сервере
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;