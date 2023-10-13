import React, { useRef, useState } from 'react'

function RefHook() {
    const [color, setColor] = useState('')

    var h1ref = useRef<HTMLHeadingElement>(null);

    const changeColor = () => {
        if (h1ref.current) {
            h1ref.current.style.color = 'red'
        }
    }

    return (<>
        <h1 ref={h1ref}>Türkiye Finans</h1>
        <button onClick={changeColor}>Change Color</button>
        <hr />
        
        <h1 style={{color:color}}>İstanbul</h1>
        <button onClick={() => setColor('brown')}>Change Color - 2</button>
    </>
    )
}

export default RefHook