import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <h1><NavLink to="/">Know weather <span><FontAwesomeIcon icon={faCloud} /></span></NavLink></h1>
        </nav>
    )
}

export default Nav;
