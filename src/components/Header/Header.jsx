import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderLogin} from "./HeaderLogin";
import img from "../../assets/images/cropped-cropped-rosnf-web-1.jpg"


const Header = (props) => {
    return <header className={css.header}>
        <img
            src={img}
            alt=""/>
        <div className={css.headerText}>
            <div className={css.headerTitle}>Your Friend</div>
            <div className={css.loginBlock}>
                {props.isAuth ?
                    <div className={css.login}>
                        <HeaderLogin props={props}/>
                        <button onClick={props.logout} className={css.buttonLogout}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    </header>
};

export default Header;