import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/profile" activeClassName={css.activeLink}>
                    <img className={css.navBarImg} title="Profile"
                         src="https://img.icons8.com/nolan/64/contract-job.png"
                         alt="profileImg"/>
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" activeClassName={css.activeLink}>
                    <img className={css.navBarImg}  title="Message"
                         src="https://img.icons8.com/nolan/64/messaging-.png"
                         alt="messageImg"/>
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/users" activeClassName={css.activeLink}>
                    <img className={css.navBarImg}  title="Users"
                         src="https://img.icons8.com/nolan/64/change-user-male.png"
                         alt="usersImg"/>
                </NavLink>
            </div>
        </nav>
    )
};

export default Navbar;