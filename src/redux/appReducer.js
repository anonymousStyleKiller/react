import getAuthUserData from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promiseDispatch = dispatch(getAuthUserData());
    Promise.all([promiseDispatch]).then(()=>{
        dispatch(initializedSuccess());
    });
}


export default appReducer;