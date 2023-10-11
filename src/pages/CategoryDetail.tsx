import React from 'react'
import { useParams } from 'react-router-dom'
import ChildComp from './ChildComp'

function CategoryDetail() {

  var { id, subid } = useParams()

  return (<>
    <h1>Detail Page</h1>
    <h1>Id: {id}</h1>
    <h1>subid: {subid}</h1>

    <ChildComp/>
  </>
  )
}

export default CategoryDetail