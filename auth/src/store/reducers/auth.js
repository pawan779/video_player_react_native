const initialState = {
    email: '',
    password: ''
}

export const signupReducer = (state=initialState, action) => {
    if (action.type == "EMAIL") {
        return {
            ...state,
            email: action.payload
        }
    }
    // if (action.type == "PASSWORD") {
    //     return {
    //         ...state,
    //         password: action.payload
    //     }
    // }
    return state
}