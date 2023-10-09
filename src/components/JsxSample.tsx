import React from 'react'

function JsxSample() {

    var name = "Çağatay"

    var product = {
        name: "IPhone",
        price: 3500
    }

    var h1Style = {
        color:'aqua',
        backgroundColor:'black'
    }


    var titleElement = <>
        <h1>Çağatay Yıldız</h1>
        <h1>Türkiye</h1>
    </>

    return <>
        {titleElement}
        <h1 style={h1Style}>Türkiye Finans Bankası</h1>
        <h1>{name}</h1>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
    </>
}

export default JsxSample