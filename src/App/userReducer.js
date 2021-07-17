export const userReducer = (userState, action) => {
    if (action.type ==="SET_NAME"){
        console.log("Howdy doody")
        let newState = {
            ...userState,
            name:action.payload
        }
        console.log(newState)
        return newState

    }
    return userState;
}