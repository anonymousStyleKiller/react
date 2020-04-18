import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderLogin} from "./HeaderLogin";


const Header = (props) => {
    return <header className={css.header}>
        <img
            src='https://wallpapershome.ru/images/wallpapers/kartinki-pro-lyubov-3840x2160-kartinki-pro-lyubov-21486.jpg'
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