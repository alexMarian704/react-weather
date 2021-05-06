import React from 'react'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import urls from '../data/data'
import Daily from './Daily';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import loadingGif from '../image/loading2.gif'

const Main = () => {
    const [input, setInput] = useState('');
    const [city, setCity] = useState('');
    const { firstUrl } = urls(city)
    const { data, isLoading, error } = useFetch(city, firstUrl);

    const searchCity = (e) => {
        e.preventDefault()
        setCity(input)
    }
    console.log(data)

    if (!error) {
        return (
            <div>
                <form onSubmit={searchCity}>
                    <button className="search-but"><FontAwesomeIcon icon={faSearch} /></button>
                    <input type="text" name="city" onChange={(e) => setInput(e.target.value)} value={input} />
                </form>
                {isLoading && <div className="gifContainer">
                    <img src={loadingGif} className="loadingGif" />
                </div>}
                {data && data.cod < 301 && !error && <Daily render={data} city={city} />}
                {data && data.message && <h3 className="textTitle">{data.message}</h3>}
            </div>
        )
    } else {
        return (
            <div>
                <h2 className="textTitle">{error}</h2>
            </div>
        )
    }
}

export default Main