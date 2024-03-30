import React, { Suspense, lazy } from 'react'
import pMinDelay from 'p-min-delay';
import './Load.css'
const Calcu = lazy(() =>   pMinDelay(import('./../calcu/Calcu'),2000) )

const Load = () => {
  return (
      <>
      <Suspense fallback={<div class='loader'>
        <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
      </div>

      }>
            <Calcu/>
          </Suspense >     
      </>
  )
}

export default Load