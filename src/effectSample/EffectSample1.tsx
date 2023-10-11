import React, { useEffect, useState } from 'react'

function EffectSample1() {

    const [counter, setcounter] = useState(0)
    const [counter2, setcounter2] = useState(0)

    const [randomNumber, setrandomNumber] = useState(0)

    const increase = () => {
        setcounter(counter + 1)
    }

    
    
    //useEffect boş bir array ile çalışıyorsa o kod bloğu sadece BİR KERE ÇALIŞIR!
    useEffect(() => {
        
        var random = Math.random();
        setrandomNumber(random)
        
    }, [counter2])

    return (<>
        <h1>{randomNumber}</h1>
        <h1>{counter}</h1>
        <button onClick={increase}>Increase</button>

        <hr />
        <h1>{counter2}</h1>
        <button onClick={() => setcounter2(counter2 + 1)}>Increase - 2</button>
    </>
    )
}

export default EffectSample1