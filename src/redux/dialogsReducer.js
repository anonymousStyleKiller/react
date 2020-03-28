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
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateNewMessageBody:
            return   {
                ...state,
                newMessageBody : action.body
            };
        case sendMessage:
            let body = state.newMessageBody;
           return  {
                ...state,
                newMessageBody : '',
                message: [...state.message, {id: 6, message: body}]
            };
        default:
            return state;
    }
};


export const sendMessageCreator = () => ({type: sendMessage});
export const updateNewMessageBodyCreator = (body) => ({type: updateNewMessageBody, body: body});
export default dialogsReducer;