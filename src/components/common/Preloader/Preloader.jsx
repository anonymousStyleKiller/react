import css from "../../Users/Users.module.css";
import gif from "../../../assets/images/giphy.gif";
import React from "react";


let Preloader = (props) => {
    return (
        <div className={css.loader}>
            <img alt=""
                 className={css.preLoader}
                 src={gif}/>
        </div>
    )
};

export default Preloader;