import React from 'react';
import css from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {

    let getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
    };


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
                     <span>
                         <div>
                             <img class={css.usersPhoto} src={(u.photos.small) != null ? u.photos.small : userPhoto}
                                  className={css.userPhoto} alt=""/>
                         </div>
                         <div>
                             {u.followed ?
                                 <button onClick={() => {
                                     props.unFollow(u.id)
                                 }}>Unfollow</button>
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