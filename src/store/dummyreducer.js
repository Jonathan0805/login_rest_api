const initialState = {
    users: [],
    logged_user: null
}

export default(state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }

        case "LOGIN":
            return {
                ...state,
                logged_user: action.payload
            }

        case "LOGOUT":
            return {
                ...state,
                logged_user: null
            }

        default:
            return state;
    }
}
