const initialState = [];

export default function taskData(state = initialState, action) {
    if (action.type === 'FETCH_USER_DATA_SUCCESS'){
        return action.payload;
    }
    return state;
} ;

