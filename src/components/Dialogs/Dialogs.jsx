import React from 'react';
import css from './Dialogs.module.css';
import Dialog from "./Dialog/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs
        .map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>);
    let messageElement = state.message
        .map((message) => <Message message={message.message} id={message.id}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessageCreator();
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBodyCreator(body);
    };
    return (
        <div className={css.dialogs}>
            <div className={css.dialogItem}>
                {dialogsElement}
            </div>

            <div className={css.message}>
                <div>{messageElement}</div>
                <div>
                    <div> <textarea value={newMessageBody}
                                    onChange={onNewMessageChange}
                                    placeholder="Enter your message">

                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;