import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        let authResponse = '/auth/me';
        this.props.setAuth(authResponse);
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
});

export default connect(mapStateToProps, {
    setAuth
})(HeaderContainer);