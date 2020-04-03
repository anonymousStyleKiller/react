const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const USERS = 'USERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const TOTALUSERSCOUNT = 'TOTALUSERSCOUNT';
const TOGGLEISFETCHING = 'TOGGLEISFETCHING';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            };
        case USERS:
            return {...state, users: action.users};
        case SETCURRENTPAGE:
            return {...state, currentPage: action.currentPage};
        case TOTALUSERSCOUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLEISFETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};


export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: USERS, users});
export const setCurrentPageActionCreator = (currentPage) => ({type: SETCURRENTPAGE, currentPage});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: TOTALUSERSCOUNT, totalUsersCount});
export const setIsFetchingActionCreator = (isFetching) => ({type: TOGGLEISFETCHING, isFetching});
export default usersReducer;