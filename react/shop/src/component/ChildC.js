import React, { useContext } from 'react'
import { Acomponent } from './ChildA'
const ChildC = () => {
     const [data,update] = useContext(Acomponent)
    const updateContext = () => { 
      update('hii i am ok')
    }
   
    return (
        <div>hII I AM C

            <h1 style={{ color: 'green' }}>{data}</h1>
            <button onClick={() => { 
                updateContext()
            }}>Update</button>
        </div>
    )
}

export default ChildC