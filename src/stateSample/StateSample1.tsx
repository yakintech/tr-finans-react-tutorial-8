import React, { useState } from 'react'

function StateSample1() {

  
  //1. counter kullandığım değişkenimin adı
  //2. setcounter bu değişkeni DEĞİŞTİRECEK FONKSİYON
  //3. usestate içerisindeki 0 ise değişkenin default değeri
  const [counter, setcounter] = useState(0);

  const increase = () => {
    setcounter(10)
  }

  return (<>
    <h1>{counter}</h1>
    <button onClick={increase}>Increase</button>
  </>)
}

export default StateSample1


//use anahtar kelimesiyle başlayan yapılar genellikle HOOK olarak adlandırılır. Örneğine useState HOOK
