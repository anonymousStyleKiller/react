import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`, {withCredentials:true}).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });

    };

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`, {withCredentials:true}).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       users={this.props.users}
                       unFollow={this.props.unFollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setIsFetching, setTotalUsersCount})
(UsersAPIComponent);