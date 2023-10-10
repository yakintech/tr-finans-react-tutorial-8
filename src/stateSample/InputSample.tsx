import React, { useState } from 'react'

function InputSample() {

    const [name, setname] = useState<string>('')

    const show = () => {
        console.log('Name ', name);    
    }

    //Iputtan aldığın datayı console da göster!
    return (<>
        <input type='text' onChange={(e) => setname(e.target.value)} />
        <button onClick={show}>Show</button>
    </>)
}

export default InputSample