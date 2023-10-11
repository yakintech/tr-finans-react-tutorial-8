import React, { useState } from 'react'

function StateArraySample3() {

    const [name, setname] = useState<string>('')
    const [names, setnames] = useState<string[]>([])

    const add = () => {

        //eğer dizide bu isim varsa ekleme
        if (!names.includes(name))
            setnames([...names, name])

    }

    

    return (<>

        <div>
            <label htmlFor="">Name</label>
            <input type="text" name="" id='firstName' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>

        <hr />

        <ul>
            {
                names && names.map((item, key) => <li key={key}>{item}</li>)
            }
        </ul>


    </>)
}

export default StateArraySample3