import React, { useState } from 'react'

function StateArraySample() {

    let cityData = ["İstanbul", "Ankara", "İzmir", "Aydın", "Erzurum", "Diyarbakır", "Trabzon"];

    const [cities, setcities] = useState<string[]>(cityData)

    return (<>

        <h1>Length: {cities.length}</h1>

        <ul>
            {
                cities && cities.map((item) => <li>{item}</li>)
            }
        </ul>

        <hr />
        <button onClick={() => setcities([])}>Empty</button>

    </>
    )
}

export default StateArraySample
