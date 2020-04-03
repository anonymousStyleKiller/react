import css from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from 'react';

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
                             <img className={css.usersPhoto} src={(u.photos.small) != null ? u.photos.small : userPhoto} alt=""/>
                         </div>
                         <div>
                             {u.followed ?
                                 <button onClick={() => {
                                     props.unFollow(u.id)
                                 }}>UnFollow</button>
                                 : <button onClick={() => {
                                     props.follow(u.id)
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