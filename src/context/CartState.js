import React, { useState } from "react";
import cartContext from "./CartContext";

const CartState = (props) => {
    const s = {
        item: 0
    }
    const [count, setCount] = useState(s.item)

    const increaseCount = () => {
        setCount(count+1)
    }
    return (
        <cartContext.Provider value={{count, increaseCount}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartState;