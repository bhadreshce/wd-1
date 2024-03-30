import React, {memo} from 'react'

const B = ({todo,changeB }) => {
   
    console.log('component b');
  return (
    <>B</>
  )
}

export default memo(B)