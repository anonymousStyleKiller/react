import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/DialogsItem";
import Message from "./Message/Message";

let newDialogMessage = React.createRef();
const dialogMessage = () => {
    let text = newDialogMessage.current.value;
    alert(text);
}
const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs
        .map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>);

    let messageElement = props.state.message
        .map((message) => <Message message={message.message} id={message.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>

            <div className={s.message}>
                {messageElement}
            </div>
            <textarea ref={newDialogMessage}></textarea>
            <br/>
            <button onClick={dialogMessage}>Отправить</button>
        </div>
    );
    

};

    


export default Dialogs;