const addPost = "ADD-POST";
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    newPostText: "",
    postsData: [
        {id: 1, name: "Anton ", lastName: "Kharchenko ", likesCount: "0"},
        {id: 2, name: "Alex ", lastName: "Glinka ", likesCount: "23"}
    ]
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
            let copyState = {...state};
            copyState.postsData = [...state.postsData];
            copyState.postsData.push(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case updateNewPostText:
            let copyState = {...state};
            copyState.newPostText = action.newText;
            return copyState;
        default:
            return state;
    }


};

export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text});
export default profileReducer;