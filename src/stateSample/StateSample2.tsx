import React, { useState } from 'react'

function StateSample2() {

    const [color, setColor] = useState("tomato");

    const changeColor = () => {
        
        setColor('aqua')
    }

    return <>
        <p style={{backgroundColor:color}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi est ea iste rem unde facere pariatur vel, quis maiores voluptatibus odit reiciendis, neque consectetur natus officia velit recusandae. Voluptatum, quia.</p>

        <button onClick={changeColor}>Change Color</button>
        <button onClick={() => changeColor()}>Change Color</button>

    </>
}

export default StateSample2