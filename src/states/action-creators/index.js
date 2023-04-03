/* eslint-disable */

export const updateProducts = (products) => {
    return (dispatch) => {
        dispatch({
            type: 'update',
            payload: products
        })
    }
} 