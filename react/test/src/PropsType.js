import React from 'react'
import PropTypes from 'prop-types'

const PropsType = ({ list }) => {
    return (
        <>
            <h1>{list.name}</h1>
            <h1>{list.age}</h1>
        </>
    )
}

// PropsType.propTypes = {
//     site: PropTypes.number.isRequired
// }

PropsType.propTypes = {
    list: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    })
}

export default PropsType