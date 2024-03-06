import React, { useContext } from 'react'
import { T } from './Main'

const Sec = () => {
    const [color] = useContext(T)

    return (
        <>
            <p style={{ backgroundColor: color == 'dark' ? 'black' : 'white', color: color == 'dark' ? 'white' : 'black' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quibusdam sunt numquam nihil magnam nemo sit amet incidunt quia nam, molestiae vero, ab temporibus eius nostrum. Quo ab voluptas quaerat?</p>
        </>
    )
}

export default Sec