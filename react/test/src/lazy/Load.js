import React, {Suspense, lazy } from 'react'
const Calcu = lazy(() => import('./../calcu/Calcu'))

const Load = () => {
  return (
      <>
          <Suspense fallback={<h1>loading..................</h1>} >
            <Calcu/>
          </Suspense >     
      </>
  )
}

export default Load