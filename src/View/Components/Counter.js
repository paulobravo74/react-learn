import React, { useState } from "react" 

export default function Counter() {


    const [value, setValue] = useState(0)

    function decrement() {
        setValue(value - 1)
    }

    function increment() {
        setValue((e) => { return e + 1})
    }

    function reset() {
        setValue(0)
    }


    
    return (
        <div>
            <button className="button" onClick={decrement}>Decrement</button>
            {value}
            <button className="button" onClick={increment}>Increment</button>
            <button className="button" onClick={reset}>Reset</button>
        </ div>
    )
}