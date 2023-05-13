const reducer = (state = "", action) => {
    if(action.type === 'search') {
        return state = action.payload
    }
    else return state;
}

export default reducer;