import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElement = state.message
        .map((message) => <Message message={message.message} key={message.id} id={message.id}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
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