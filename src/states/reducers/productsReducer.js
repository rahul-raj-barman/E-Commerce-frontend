const reducer = (state = 10, action) => {
    if(action.type === 'update') {
        return state = action.payload;
    }
    else return state;
}

export default reducer;