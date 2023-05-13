const reducer = (state = [], action) => {
    if(action.type === 'update') {
        return state = action.payload;
    }
    else return state;
}

export default reducer