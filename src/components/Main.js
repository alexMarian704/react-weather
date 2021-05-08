import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'

const Main = () => {
    const [input, setInput] = useState('');
    const history = useHistory();

    const searchCity = (e) => {
        e.preventDefault()
        history.push(`/${input}`)
    }
        return (
            <div>
                <form onSubmit={searchCity}>
                    <button className="search-but"><FontAwesomeIcon icon={faSearch} /></button>
                    <input type="text" name="city" onChange={(e) => setInput(e.target.value)} value={input} />
                </form>
                <h2 className="city">Search a city</h2>
            </div>
        )
}

export default Main