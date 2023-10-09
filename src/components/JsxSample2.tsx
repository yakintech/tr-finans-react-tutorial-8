import React from 'react'

function JsxSample2() {

    var onlineStatus = true;

    var cities = ["İstanbul", "Ankara", "İzmir", "Trabzon", "Diyarbakır", "Erzurum", "Edirne"]

    //Eğer kullanıcı online ise ekranda "User Online" değilse "User Offline" yazsın
    return (<>
        {
            onlineStatus ? <h1>User Online</h1> : <h1>User Offline</h1>
        }

        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>

    </>
    )
}

export default JsxSample2