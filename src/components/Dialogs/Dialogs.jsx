import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";



const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElement = state.message
        .map((message) => <Message message={message.message} key={message.id} id={message.id}/>);


     let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItem}>
                {dialogsElement}
            </div>

            <div className={css.message}>
                <div>{messageElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};
const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const  AddMessageFormRedux = reduxForm({
        form: 'dialogAddMessageForm'
})(addMessageForm);

export default Dialogs;