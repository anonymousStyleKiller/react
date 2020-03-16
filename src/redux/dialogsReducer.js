const updateNewMessageBody = 'update-New-Message-Body';
const sendMessage = 'send-Message';

const dialogsReducer = (state, action) => {
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