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
    let dialogsData = [
        {id: "1", name: "Anton"},
        {id: "2", name: "Dima"},
        {id: "3", name: "Sasha"},
        {id: "4", name: "Nadya"},
        {id: "5", name: "Artem"},
    ];
    let messageData = [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "Hello"},
        {id: "4", message: "Yo"},
        {id: "5", message: "Privet"},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>

            <div className={s.message}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
            </div>
        </div>
    );

};

export default Dialogs;