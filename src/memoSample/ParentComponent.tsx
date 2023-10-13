import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {

    const [counter, setCounter] = useState(0)

    return (<>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <hr />
        <ChildComponent/>
    </>)
}

export default ParentComponent