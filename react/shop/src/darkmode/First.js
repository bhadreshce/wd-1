import React, { useContext } from 'react'
import { T } from './Main'
function First() {
    const [color, setTheme] = useContext(T)
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>

                    <button onClick={() => {
                        setTheme(color == 'light' ? 'dark' : 'light')
                    }} class="btn btn-outline-success my-2 my-sm-0" type="submit">{color == 'light' ? 'Dark' : 'Light'}</button>

                </div>
            </nav >
            <h1 style={{ backgroundColor: color == 'dark' ? 'black' : 'white', color: color == 'dark' ? 'white' : 'black' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero cum doloribus repellendus autem dolorum, soluta modi culpa adipisci eligendi odio non a minima, quo perferendis dolores. Hic, consequatur magni!</h1>
        </>
    )
}

export default First