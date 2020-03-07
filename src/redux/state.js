
let store = {
    _state: {
        profilePage: {
            newPostText: "it-toxa.com",
            postsData: [
                { id: "1", name: "Anton", lastName: "Kharchenko", likesCount: "0" },
                { id: "2", name: "Alex", lastName: "Glinka", likesCount: "23" }
            ]
        },
        dialogsPage: {
            message: [
                { id: "1", message: "Hi" },
                { id: "2", message: "How are you?" },
                { id: "3", message: "Hello" },
                { id: "4", message: "Yo" },
                { id: "5", message: "Privet" },
            ],
            dialogs: [
                { id: "1", name: "Anton" },
                { id: "2", name: "Dima" },
                { id: "3", name: "Sasha" },
                { id: "4", name: "Nadya" },
                { id: "5", name: "Artem" },
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State');
    },
    addPost() {
        let newPost = {
            id: "3",
            name: "Jhon",
            lastName: this._state.profilePage.newPostText,
            likesCount: 15
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(obserwer) {
        this._callSubscriber = obserwer;
    }
};



window.state = store;
export default store;