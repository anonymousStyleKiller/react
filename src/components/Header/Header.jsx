import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return <header className={css.header}>
        <img
            src='https://wallpapershome.ru/images/wallpapers/kartinki-pro-lyubov-3840x2160-kartinki-pro-lyubov-21486.jpg'
            alt=""/>
        <div className={css.headerText}>
            <div className={css.headerTitle}>You Love</div>
        </div>


    </header>
};

export default Header;