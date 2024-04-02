import React from 'react'
import { useSelector } from 'react-redux'
const Head = () => {

    const state = useSelector((result) => { 
             return result.IncDec.count
    })
  return (
      <div>Head {state}</div>
  )
}

export default Head