import css from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from 'react';
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={css.pages}>
                {
                    pages.map(pageNumber => {
                        return <span className={props.page === pageNumber && css.selectedPage}
                                     onClick={() => {
                                         props.onPageChanged(pageNumber)
                                     }}>{pageNumber}</span>
                    })
                }
            </div>
            {props.users.map(u =>
                <div className={css.users} key={u.id}>
                    <div className={css.usersProfile}>
                     <span>
                             <div>
                                 <NavLink to={'/profile/' + u.id}>
                                      <img className={css.usersPhoto}
                                           src={(u.photos.small) != null ? u.photos.small : userPhoto}
                                           alt=""/>
                                 </NavLink>
                             </div>
                             <div className={css.follow}>
                                 {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                       onClick={() => {
                                                           props.unFollow(u.id);
                                                       }}>UnFollow</button>
                                     : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                               onClick={() => {
                                                   props.follow(u.id);
                                               }}>Follow</button>}
                             </div>
                     </span>
                                <span>
                                     <div>{u.name}</div>
                                     <div>{u.status}</div>
                                </span>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Users;