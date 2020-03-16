import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            newPostText: "it-toxa.com",
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
                {id: "2", name: "Dina"},
                {id: "3", name: "Sasha"},
                {id: "4", name: "Nadya"},
                {id: "5", name: "Andrew"},
            ],
            newMessageText: []
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
            this._state.profilePage =  profileReducer(this._state.profilePage, action);
            this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
            this._state.sidebar =  sidebarReducer(this._state.dialogsPage, action);
            this._callSubscriber(this._state);
    }
};

export default store;