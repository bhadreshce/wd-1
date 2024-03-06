import React, { useState, createContext } from 'react'
import First from './First'
import Sec from './Sec'
import Third from './Third'
export const T = createContext()
const Main = () => {
    const theme = useState('light')
    return (
        <>
            <T.Provider value={theme}>
                <First />
                <Sec />
                <Third />
            </T.Provider>

        </>
    )
}

export default Main