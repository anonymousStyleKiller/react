import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

export const HeaderLogin = (props) =>{
    const  {login,email} = props.props;
    return(
        <div className={css.headerLogin}>
            <div>{login}</div>
            <div>{email}</div>
        </div>
    )
};

const Header = (props) => {
    return <header className={css.header}>
        <img
            src='https://wallpapershome.ru/images/wallpapers/kartinki-pro-lyubov-3840x2160-kartinki-pro-lyubov-21486.jpg'
            alt=""/>
                <div className={css.headerText}>
                    <div className={css.headerTitle}>You Love</div>
                    <div className={css.loginBlock}>
                {props.isAuth ?  <HeaderLogin props={props}/>
                    :<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
    </header>
};

export default Header;