import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setIsFetchingActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import gif from "../../assets/images/giphy.gif";
import css from "./Users.module.css";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });

    };
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        return (
            <>
                <div className={css.loader}>{this.props.isFetching? <img alt=""
                                                  className={css.preLoader}
                                                  src={gif}/>:null}</div>

                <Users totalUsersCount = {this.props.totalUsersCount}
                       pageSize = {this.props.pageSize}
                       currentPage = {this.props.currentPage}
                       onPageChanged = {this.onPageChanged}
                       follow = {this.props.follow}
                       users = {this.props.users}
                       unfollow = {this.props.unFollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) =>{
            dispatch(followActionCreator(userId));
        },
        unFollow: (userId) =>{
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: (users) =>{
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalCount: (totalUsersCount) =>{
            dispatch(setTotalUsersCountActionCreator(totalUsersCount));
        },
        toggleIsFetching: (isFetching) =>{
            dispatch(setIsFetchingActionCreator(isFetching));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);