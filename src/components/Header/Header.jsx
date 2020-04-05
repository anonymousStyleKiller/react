import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const  {id, email, login } = props;
    return <header className={css.header}>
        <img
            src='https://wallpapershome.ru/images/wallpapers/kartinki-pro-lyubov-3840x2160-kartinki-pro-lyubov-21486.jpg'
            alt=""/>
        <div className={css.headerText}>
            <div className={css.headerTitle}>You Love</div>
            <div className={css.loginBlock}>
                {props.isAuth ?  login
                    :<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>


    </header>
};

export default Header;