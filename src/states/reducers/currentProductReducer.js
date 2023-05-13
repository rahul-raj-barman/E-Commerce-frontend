const reducer = (state = null, action) => {
    if(action.type === 'update') {
        return state = action.payload;
    }
    else return state;
}

export default reducer;