import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
    let dialogs = [
        {id: "1", name: "Anton"},
        {id: "2", name: "Dima"},
        {id: "3", name: "Sasha"},
        {id: "4", name: "Nadya"},
        {id: "5", name: "Artem"},
    ];
    let message = [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "Hello"},
        {id: "4", message: "Yo"},
        {id: "5", message: "Privet"},
    ];


let dialogsElement = dialogs
.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);
 


    let messageElement = message
.map((message)=> <Message message={message.message} id={message.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
          {dialogsElement}  
            </div>

            <div className={s.message}>
            {messageElement}
            </div>
        </div>
    );

};

export default Dialogs;