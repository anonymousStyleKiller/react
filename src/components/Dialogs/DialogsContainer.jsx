import React from 'react';
import css from './Dialogs.module.css';
import Dialog from "./Dialog/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };
    return (
    <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
             sendMessageCreator={onSendMessageClick}
             dialogsPage={state}
    />
    );
};


export default DialogsContainer;