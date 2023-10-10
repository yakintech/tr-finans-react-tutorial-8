import React, { useState } from 'react'

function InputArraySample() {

    const [users, setusers] = useState<User[]>([]);
    const [name, setname] = useState<string>('');
    const [surname, setsurname] = useState<string>('');

    const add = () => {
        var newUser : User = {
            name: name,
            surname:surname
        }

        setusers([...users, newUser])
    }



    return (<>
        <div>
            <label htmlFor="">Name</label>
            <input type="text"  onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Surname</label>
            <input type="text"  onChange={(e) => setsurname(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>
        <ul>
            {
                users && users.map((item, index) => <li key={index}>{item.name} {item.surname}</li>)
            }
        </ul>

    </>)
}

export default InputArraySample


interface User {
    name: string;
    surname: string;
}