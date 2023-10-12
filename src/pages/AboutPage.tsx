import React, { useContext, useEffect } from 'react'
import { CounterContext, CounterContextType } from '../contextSample/CounterContext';

function AboutPage() {

  const { counter, setcounter } = useContext(CounterContext) as CounterContextType

  

  useEffect(() => {
    
   var interval = setInterval(() => {
      console.log('Hello');
    }, 1000)
  
    return () => {
        clearInterval(interval)
    }
  }, [])
  

  return (<>
  <h1>{counter}</h1>
  <button onClick={() => setcounter(counter + 1)}>Increase</button>
  </>)
}

export default AboutPage