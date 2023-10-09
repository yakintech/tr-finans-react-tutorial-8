import React from 'react'

function JsxSample3() {


    const hello = () => {
        alert("Hello Türkiye Finans!")
    }
    
    const calc = (price: number) => {
        alert(price * 1.2)
    }

    //Aşağıdaki button click olduğunda ekrana "HELLO TÜRKİYE FİNANS" yazsın
    return (<>
        <button onClick={hello}>Hello</button>
        <button onClick={() => hello()}>Hello - 2</button>

        <div>
            <button onClick={() => calc(20)}>Calc</button>
        </div>
    </>
    )
}

export default JsxSample3