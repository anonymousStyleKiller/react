import css from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from 'react';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                        return <span className={props.currentPage === pageNumber && css.selectedPage}
                                     onClick={() => {
                                         props.onPageChanged(pageNumber)
                                     }}>{pageNumber}</span>
                    })
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                     <span>
                         <div>
                             <NavLink to={'/profile/' + u.id}>
                                  <img className={css.usersPhoto}
                                       src={(u.photos.small) != null ? u.photos.small : userPhoto}
                                       alt=""/>
                             </NavLink>
                         </div>
                         <div>
                             {u.followed
                                 ? <button onClick={() => {
                                     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                         {
                                             withCredentials: true,
                                             headers: {"API-KEY": "23520520-94a9-4001-869b-8a8d6e40abb4"}
                                         }
                                     ).then(response => {
                                         if (response.data.resultCode === 0) {
                                             props.unFollow(u.id)
                                         }
                                     })
                                 }}>UnFollow</button>
                                 : <button onClick={() => {
                                     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                         {}, {
                                             withCredentials: true,
                                             headers: {"API-KEY": "23520520-94a9-4001-869b-8a8d6e40abb4"}
                                         }).then(response => {
                                         if (response.data.resultCode === 0) {
                                             props.follow(u.id);
                                         }
                                     })


                                 }}>Follow</button>}
                                     </div>
                                     </span>
                    <span>
                                     <span>
                                     <div>{u.name}</div>
                                     <div>{u.status}</div>
                                     </span>
                                     <span>
                                     <div>{"u.location.country"}</div>
                                     <div>{"u.location.city"}</div>
                                     </span>
                                     </span>
                </div>
            )}
        </div>
    )
};

export default Users;