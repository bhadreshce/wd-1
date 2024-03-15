import React, { useState } from 'react'
import sun from './../sun.jpg'
import moon from './../moon.jpg'
import sunset from './../sunset.jpg'
import hotel from './../hotel.jpg'
import './Render.css'

const Render = () => {
    // let value = 'sun'
    const [data, setData] = useState(null)

    const changeContent = (con) => {
        setData(con)
    }

    return (
        <>
            {/* example 1 */}
            {/* {value == 'sun' && (<img src={sun} alt="" />)} */}
            {/* {value == 'moon' && (<img src={moon} alt="" />)} */}
            {/* {value == 'sun' ? (<div className='box'><img src={sun} /></div>) : (<div className='box'><img src={moon} /></div>)} */}

            {/* example 2 */}

            <div id="react-application">
                <div className="controls">
                    <button id="button_one" onClick={() => {
                        changeContent('f1')
                    }}>Render Div One</button>
                    <button id="button_two" onClick={() => {
                        changeContent('f2')
                    }}>Render Div Two</button>
                    <button id="button_three" onClick={() => {
                        changeContent('f3')
                    }}>Render Div Three</button>
                </div>
                <div className="conditional-render-section">
                    {data == 'f1' && (
                        <>
                            <img height={'200px'} src={sunset} alt="" />
                        </>
                    )}

                    {data == 'f2' && (
                        <>
                            <img height={'200px'} src={hotel} alt="" />
                        </>
                    )}

                    {data == 'f3' && (
                        <>
                            <p style={{ width: '200px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis delectus et repellendus accusantium velit ab praesentium quos vel totam. Veniam beatae enim blanditiis, reprehenderit architecto asperiores maiores maxime. Laborum, nulla.</p>
                        </>
                    )}

                </div>
            </div>







        </>
    )
}

export default Render