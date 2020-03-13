const addPost = "ADD-POST";
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const updateNewMessageBody = 'update-New-Message-Body';
const sendMessage = 'send-Message';


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
            ],
            newMessageText:[]
        },
        sidebar : {},
    },
    _callSubscriber() {
        console.log('State');
    },

    getState() {
        return this._state;
    },
    subscribe(obserwer) {
        this._callSubscriber = obserwer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: "3",
                name: "Jhon",
                lastName: this._state.profilePage.newPostText,
                likesCount: 15
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === updateNewPostText) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type ===updateNewMessageBody){
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        }else if(action.type ===sendMessage){
            let body =  this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.newMessageText = '';    
            this._state.dialogsPage.message.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({type: addPost})
export const updateNewPostTextActionCreator = (text) => ({ type: updateNewPostText, newText: text })

export const sendMessageCreator = () => ({type: sendMessage})
export const updateNewMessageBodyCreator = (body) => ({ type: updateNewMessageBody, body: body })

export default store;