import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactPage() {

  var navigate = useNavigate()

  const go = () => {

    navigate('/categories')

  }

  return (<>
    <div>Contact Page</div>
    <button onClick={go}>Go To categories Page</button>
  </>
  )
}

export default ContactPage