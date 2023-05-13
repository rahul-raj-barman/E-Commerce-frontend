/* eslint-disable */

export const currUser = (data) => {
    return ( dispatch) => {
        dispatch({
            type: update,
            payload: data
        })
    }
}

export const updateProducts = (products) => {
    return (dispatch) => {
        dispatch({
            type: 'update',
            payload: products
        })
    }
} 

export const pageProducts = (product) => {
    return (dispatch) => {
        dispatch({
            type: 'update',
            payload: product
        })
    }
}

export const currentProduct = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'update',
            payload: id
        })
    }
}

export const cartItem = (count) => {
    return (dispatch) => {
        dispatch({
            type: 'update',
            payload: count,
        })
    }
}

export const updateData = (state) => {
    return (dispatch) => {
        dispatch({
            type: 'update',
            payload: state
        })
    }
}

export const searchData = (state) => {
    return (dispatch) => {
        dispatch({
            type: 'search',
            payload: state
        })
    }
}