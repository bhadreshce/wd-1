import React, { useContext } from 'react'
import { T } from './Main'
const Third = () => {
    const [color] = useContext(T)

    return (
        <>
            <h4 style={{ backgroundColor: color == 'dark' ? 'black' : 'white', color: color == 'dark' ? 'white' : 'black' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit facilis, unde repudiandae doloremque itaque nostrum architecto, perspiciatis animi modi dignissimos reiciendis at quibusdam magnam, soluta voluptates! Aut iure vel totam?</h4>
        </>
    )
}

export default Third