export const userReducer=(userState,action) => {
    if (action.type === "SET_NAME"){
        return {
        ...userState,
        name: action.payload
        }
    }
    if (action.type === "SET_SEED"){
        return {
        ...userState,
        seeds: action.payload
        }
    }
    if (action.type === "SET_EXERCISE"){
        return {
        ...userState,
        exerciseType: action.payload.exerciseType,
        exerciseSource: action.payload.exerciseSource
        }
    }
    if(action.type === "SET_AMOUNT"){
        return {
        ...userState,
        amount: action.payload
        }
    }
    return userState
    }
