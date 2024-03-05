import React, { createContext, useState } from 'react'
import ChildB from './ChildB'
export const Acomponent = createContext()
const ChildA = () => { 
    const hook = useState('A')
    return (
        <div>
            <Acomponent.Provider value={hook}>
                <ChildB />
                hook
                hook
                hook
            </Acomponent.Provider>
            <h1>hii i am A TO C</h1>

        </div>
    )
}

export default ChildA