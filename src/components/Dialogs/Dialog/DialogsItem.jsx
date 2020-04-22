import React from 'react';
import css from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={path}>{props.name}:</NavLink>
        </div>
    );
};


export default DialogItem;