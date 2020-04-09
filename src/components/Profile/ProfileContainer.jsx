import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {SetUserProfileThunk} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.SetUserProfileThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


let withRouterContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    SetUserProfileThunk
})(withRouterContainer);