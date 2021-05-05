import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <nav>
            <h1>Know weather <span><FontAwesomeIcon icon={faCloud} /></span></h1>
        </nav>
    )
}

export default Nav;
