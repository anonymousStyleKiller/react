const addPost = "ADD-POST";
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: "3",
                name: "John",
                lastName: state.newPostText,
                likesCount: 15
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case updateNewPostText:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }


};

export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text});
export default profileReducer;