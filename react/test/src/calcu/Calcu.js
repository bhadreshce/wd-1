import React from 'react'
import './Calcu.css'
const Calcu = () => {


    const clearN = () => {

    }

    const removeData = () => {

    }

    const displayN = (val) => {
        document.getElementById('inputbox').value += val
    }
    98
    .0

    const cal = () => {
        let total = eval(document.getElementById('inputbox').value)
        document.getElementById('inputbox').value = total
    }
    return (
        <>
            <div className="container">
                <div className="calculator">
                    <form action="#">
                        <div className="display">
                            <input type="text" name="display" id="inputbox" placeholder={0} />
                        </div>
                        <div>
                            <input
                                type="button"
                                defaultValue="Ac"
                                className="operator"
                                onClick={() => {
                                    clearN()
                                }}
                            />
                            <input
                                type="button"
                                defaultValue="DE"
                                className="operator"
                                onClick={() => {
                                    removeData()
                                }}
                            />
                            <input
                                type="button"
                                defaultValue="."
                                className="operator"
                                onClick={() => { displayN('.') }}
                            />
                            <input
                                type="button"
                                defaultValue="/"
                                className="operator"
                                onClick={() => {
                                    displayN('/')
                                }}
                            />
                        </div>
                        <div>
                            <input type="button" defaultValue={7} onClick={() => {
                                displayN('7')
                            }} />
                            <input type="button" defaultValue={8} onClick={() => {
                                displayN('8')
                            }} />
                            <input type="button" defaultValue={9} onClick={() => {
                                displayN('9')
                            }} />
                            <input
                                type="button"
                                defaultValue="*"
                                className="operator"
                                onClick={() => {
                                    displayN('*')
                                }}
                            />
                        </div>
                        <div>
                            <input type="button" defaultValue={4} onClick={() => {
                                displayN('4')
                            }} />
                            <input type="button" defaultValue={5} onClick={() => {
                                displayN('5')
                            }} />
                            <input type="button" defaultValue={6} onClick={() => {
                                displayN('6')
                            }} />
                            <input
                                type="button"
                                defaultValue="-"
                                className="operator"
                                onClick={() => {
                                    displayN('-')
                                }
                                }
                            />
                        </div>
                        <div>
                            <input type="button" defaultValue={1} onClick={() => {
                                displayN('1')
                            }} />
                            <input type="button" defaultValue={2} onClick={() => {
                                displayN('2')
                            }} />
                            <input type="button" defaultValue={3} onClick={() => {
                                displayN('3')
                            }} />
                            <input
                                type="button"
                                defaultValue="+"
                                className="operator"
                                onClick={() => {
                                    displayN('+')
                                }}
                            />
                        </div>
                        <div>
                            <input type="button" defaultValue={'00'} onClick={() => {
                                displayN('00')
                            }} />
                            <input type="button" defaultValue={0} onClick={() => {
                                displayN('0')
                            }} />
                            <input type="button" defaultValue="=" onClick={() => {
                                cal()
                            }} />
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Calcu