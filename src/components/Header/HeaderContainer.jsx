import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {apiMe} from "../../api/api";


class HeaderContainer extends React.Component{

    componentDidMount() {
        let authResponse = '/auth/me';
        apiMe.auth(authResponse).then(
            data=> {
                if (data.resultCode === 0) {
                    let {login, id, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            }
        );
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