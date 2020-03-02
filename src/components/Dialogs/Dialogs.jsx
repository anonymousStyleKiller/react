import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Anton</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Vika</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Ksenia</NavLink>
                </div>
            </div>
            <div className={s.message}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );

};

export default Dialogs;