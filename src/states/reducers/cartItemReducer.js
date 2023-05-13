const reducer = (state = 0, action) => {
    if(action.type === 'increase'){
        return state+1;
    }
    else if(action.type === 'decrease') {
        return state-1;
    }
    else return state
}

export default reducer;