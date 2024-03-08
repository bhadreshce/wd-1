import React, { useContext } from 'react'
import { T } from './Main'
function First() {
    const [color, setTheme] = useContext(T)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>

                    <button onClick={() => {
                        setTheme(color == 'light' ? 'dark' : 'light')
                    }} className="btn btn-outline-success my-2 my-sm-0" type="submit">{color == 'light' ? 'Dark' : 'Light'}</button>

                </div>
            </nav >
            <h1 style={{ backgroundColor: color == 'dark' ? 'black' : 'white', color: color == 'dark' ? 'white' : 'black' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero cum doloribus repellendus autem dolorum, soluta modi culpa adipisci eligendi odio non a minima, quo perferendis dolores. Hic, consequatur magni!</h1>
        </>
    )
}

export default First