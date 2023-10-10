import React, { useState } from 'react'

function StateArraySample2() {

    const [numbers, setnumbers] = useState<number[]>([])

    const add = () => {
        //0 ile 1000 arasında Int bir random değer üretiyorum.
        var randomNumber = Math.floor(Math.random() * 1000)

        numbers.push(randomNumber)
        // setnumbers([...numbers])

        var newNumbers = numbers;

         setnumbers(newNumbers)

    }

    return (<>
        <button onClick={add}>Add Random Number</button>
        <ul>
            {
                numbers && numbers.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default StateArraySample2





//Virtual Dom nedir açıklayınız
//React state çalışma mantığını açıklayınız