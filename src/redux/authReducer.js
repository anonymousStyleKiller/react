import {authMe} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authMe.auth().then(
            data => {
                if (data.resultCode === 0) {
                    let {login, id, email} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            }
        );
    }
}
export const login = (email, password, rememberMe) => (dispatch) => {
        authMe.login(email, password, rememberMe).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            }
        );
}

export const logout = () => (dispatch) => {
    authMe.logout().then(
        data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        }
    );
}


export default authReducer;