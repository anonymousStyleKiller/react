import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogsItem";
import Message from "./Message/Message";
import AddMessageForm from "./Message/AddMessageForm";



const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElement = state.message
        .map((message) => <Message message={message.message} key={message.id} id={message.id}/>);


     let newMessageBody = state.newMessageBody;

    let AddNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItem}>
                {dialogsElement}
            </div>

            <div className={css.message}>
                <div>{messageElement}</div>
                <AddMessageForm onSubmit={AddNewMessage}/>
            </div>
        </div>
    );
};


export default Dialogs;