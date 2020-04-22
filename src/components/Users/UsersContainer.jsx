import React from 'react';
import {connect} from "react-redux";
import {follow, getRequestUsers, setCurrentPage, toggleFollowingProgress, unFollow} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getRequestUsers(this.props.page, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getRequestUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users follow={this.props.follow}
                       users={this.props.users}
                       unFollow={this.props.unFollow}
                       page={this.props.page}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        page: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(withAuthRedirect,
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage,
        toggleFollowingProgress, getRequestUsers
    }))(UsersAPIComponent)