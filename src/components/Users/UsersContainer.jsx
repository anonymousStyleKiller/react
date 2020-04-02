import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../redux/usersReducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);