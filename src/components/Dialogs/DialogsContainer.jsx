import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import storeContext from "../../storeContext";


const DialogsContainer = () => {

    return (
        <storeContext.Consumer>
            {
            (store) => {
                    let state = store.getState().dialogsPage;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    };
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    };
                    return(
                    <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                                            sendMessageCreator={onSendMessageClick}
                                            dialogsPage={state}/>);
            }
        }
        </storeContext.Consumer>
    );
};


export default DialogsContainer;