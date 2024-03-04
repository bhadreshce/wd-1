import React from 'react'

const Event = () => {
    const alertData = () => {
        console.log('hii this is alert data');

    }

    const submitData = (e) => {

        e.preventDefault();
        console.log('event stop');

    }

    const dbClickEvent = () => {
        console.log('db click event');

    }
    const mouseoverevent = (e) => {
        e.target.style.color = 'blue'

    }

    const mouseleavechange = (e) => {
        e.target.style.color = 'yellow'
    }

    const mouseupdata = () => {
        alert('hi mouse up ')
    }

    const ondownmouse = (e) => {
        e.target.style.color = 'pink'


    }

    const onkeyupevent = (e) => {
        console.log(e.target.value);

    }

    const keydown = (e) => {
        console.log(e.target.value);
    }

    const keypress = (e) => {
        console.log(e.target.value);

    }

    return (
        <div>
            {/* click event */}
            <button onClick={() => {
                alertData()
            }}>Click me</button>
            <hr />
            {/* submit event */}
            <form action="" onSubmit={(event) => {
                submitData(event)
            }}>
                <input type="submit" value="Submit" />
            </form>
            <hr />
            {/* double click */}
            <button onDoubleClick={() => {
                dbClickEvent()
            }}>DB click</button>
            {/* mouseover */}
            <hr />
            <button style={{ backgroundColor: "grey" }} onMouseOver={mouseoverevent}>Mouse over</button>
            <hr />
            {/* mouseleave */}
            <button onMouseLeave={mouseleavechange}>Mouse leave</button>
            <hr />


            {/* on Mouse Up */}
            <button onMouseUp={() => {
                mouseupdata()
            }}>on mouse up</button>

            <hr />
            {/*on mouse down*/}
            <button onMouseDown={ondownmouse}>mouse down</button>
            <hr />
            {/*key board event*/}
            {/* on key up event */}
            <input type="text" onKeyUp={onkeyupevent} />
            <hr />
            {/*on key down event*/}
            <hr />
            <input type="text" onKeyDown={keydown} />
            <hr />
            {/* on key press */}
            <input type="text" onKeyPress={keypress} />
        </div>
    )
}

export default Event