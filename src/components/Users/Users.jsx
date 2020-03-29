import React from 'react';
import  css from  "./Users.module.css";

const Users = (props) => {
    if(props.users.length===0){
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrs: "https://lh3.googleusercontent.com/proxy/9AKr4y_zjCiFs8tn1Zp9td_rkGuqxNOgfg4ioTSX2gvmyUiunhP1NLNTg3Vpm5dagBVNtXdNyT1RMZ43Tytt6vmDBvxdy5bYzQ5wH9Bzu5Vpf2HmwpLUOziUvsc__18Jm2cUPbfs9roNiJgBPZvcwQ0AExwZdMEHTjScJjBe_pOuqlBu9sT4_MUgp6kOm4f_8VFA6cT6xtRVIfB_irhK9TLayi3UF9COUe2_7tGMWOk8Pi3frvD9JoYaUdXDfvwOek1kDFx45PzSDHIu5k40G-5uastsZCGsje-OvsJJDg",
                    followed: false,
                    fullName: "Anton",
                    status: "I'am a Boss ",
                    location: {city: "Kryvyi Rih", country: "Ukraine"}
                },
                {
                    id: 2,
                    photoUrs: "https://lh3.googleusercontent.com/proxy/ykCUueECQMoQkRgVgYDaW1QxZ5Du-KS39-KW_vQxZyFzwtIq3WIQHs2DH7g1PBxI3OuszehQgoEVEz6tMt2i_dy7bUuqBk6QtwE1rZ8hfsgN1Uhaqo2SzhqRHxht0B_OALqj0l8WoSeLDD9_l5UFnr5VDL-4UCIQf2iRFhxtAX7KaMaX62dnkYmWOx3Vph1-0sTqTifmMQuz59jClA_t8gGjn-rZGiJkv07_euGUlY-MWUvAn0R3V2JsL_seyJepwtXL3SzTqK48Y0cz8xK6weHFkmFLXc9VjBLq",
                    followed: true,
                    fullName: "Sasha",
                    status: "I'am a Boss too",
                    location: {city: "Kiev", country: "Ukraine"}
                },
                {
                    id: 3,
                    photoUrs: "https://lh3.googleusercontent.com/proxy/MWPOKIJO9JLe6TxpnWsSCw8UijK71KUFRwCWqQI_HAoKkrljk42sqifmY4So5YayeRyv7FngyWY05IGAWe2-ga6IL2Aic45XN-3zX8Sa_9oLkR10OHuOXn9WfbJ0uBYtuJJhESuVd6ho8gduKie1EjeTcc15lebLEqILLMuYa_ypPh2nVKcsnwWaQg3oslHInCEccj2_1l66rrHRer7x-ePJIcj_g2UzUl49MhdvaPzdoMBnxSEUftGCZ29OBV8Z-Q2hg6zGtl1_q5_hnDHlY7GSmCrt0NsR5HJ-",
                    followed: false,
                    fullName: "Dima",
                    status: "I'am a Boss too",
                    location: {city: "Minsk", country: "Belarus"}
                }
            ]
        )
    }
    return (
        props.users.map(u => <div key={u.id}>
                     <span>
                         <div>
                             <img src={u.photoUrs} className={css.userPhoto} alt=""/>
                         </div>
                         <div>
                             {u.followed ?
                                 <button onClick={()=>{props.unFollow(u.id)}}>Unfollow</button>
                                 : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                         </div>
                     </span>
                <span>
                         <span>
                             <div>{u.fullName}</div>
                             <div>{u.status}</div>
                         </span>
                         <span>
                             <div>{u.location.city}</div>
                             <div>{u.location.city}</div>
                         </span>
                     </span>
            </div>
        )
    )
};


export default Users;