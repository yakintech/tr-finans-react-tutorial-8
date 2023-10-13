import React, { useCallback, useEffect, useMemo, useState } from 'react'

function ChildComponent() {

    const [counter, setcounter] = useState(0)

    console.log('Child component rendered!');

    var random = Math.random()
    var random2 = useMemo(() => {
        return Math.random()
    }, [counter]);

    const logWrite = useCallback(() => {
        var random3 = Math.random()
        console.log('Log....' + random3);
    }, [])




    return (<>
        <button onClick={logWrite}>Log</button>
        <h1>{random}</h1>
        <h1>{random2}</h1>
        <div>ChildComponent</div>
        <hr />
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>

    )
}

export default ChildComponent