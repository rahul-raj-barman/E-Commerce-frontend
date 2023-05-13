import priceContext from './priceContext'

const priceState = (props) => {
    const s = {
        count : 0
    }
    return (
        <priceContext.Provider value = {s}>
            {props.children}
        </priceContext.Provider>
    )
}

export default priceState;