import React, { forwardRef } from 'react'

const Iner = (props, ref) => {

    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
}

export default forwardRef(Iner)