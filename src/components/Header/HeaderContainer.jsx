import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        let auth = '/auth/me';
        axios.get(`https://social-network.samuraijs.com/api/1.0` + auth, {
            withCredentials:true
        }).then(responce => {
            if(responce.data.resultCode === 0){
                let {login, id, email} = responce.data.data;
                this.props.setAuthUserData(id, email, login );
            }
            });
    }

    render() {
    return (
        <Header {...this.props}/>
    )
}
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
});

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer);