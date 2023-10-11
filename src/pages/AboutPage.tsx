import React, { useEffect } from 'react'

function AboutPage() {

  useEffect(() => {
    
   var interval = setInterval(() => {
      console.log('Hello');
    }, 1000)
  
    return () => {
        clearInterval(interval)
    }
  }, [])
  

  return (<>
  </>)
}

export default AboutPage