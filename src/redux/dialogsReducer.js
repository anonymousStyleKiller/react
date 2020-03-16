const updateNewMessageBody = 'update-New-Message-Body';
const sendMessage = 'send-Message';


let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateNewMessageBody:
            state.newMessageText = action.body;
            return state;
        case sendMessage:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.message.push({id: "6", message: body});
            return state;
        default:
            return state;
    }
};


export const sendMessageCreator = () => ({type: sendMessage});
export const updateNewMessageBodyCreator = (body) => ({type: updateNewMessageBody, body: body});
export default dialogsReducer;