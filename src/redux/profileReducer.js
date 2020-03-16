const addPost = "ADD-POST";
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    newPostText: "it-toxa.com",
    postsData: [
        {id: "1", name: "Anton", lastName: "Kharchenko", likesCount: "0"},
        {id: "2", name: "Alex", lastName: "Glinka", likesCount: "23"}
    ]
};

const profileReducer = (state = initialState, action) => {
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