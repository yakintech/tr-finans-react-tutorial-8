import React, { useContext } from 'react'
import { CounterContext, CounterContextType } from '../contextSample/CounterContext'

function HomePage() {

  const { counter } = useContext(CounterContext) as CounterContextType

  return (<>
    <h1>Counter: {counter}</h1>
  </>
  )
}

export default HomePage