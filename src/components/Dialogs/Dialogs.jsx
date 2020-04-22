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
        .map((messages) => <Message message={messages.message} key={messages.id} id={messages.id}/>);

    let AddNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={css.dialogsPage}>
            <div className={css.dialogs}>
                <div className={css.dialogItem}>
                    {dialogsElement}

                    <div className={css.formDialogs}>
                        <AddMessageForm onSubmit={AddNewMessage}/>
                    </div>
                </div>

                <div className={css.message}>
                    <div className={css.messageInner}>{messageElement}</div>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;