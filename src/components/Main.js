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
                    <input type="text" name="city" onChange={(e) => setInput(e.target.value)} value={input} />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </form>
                {isLoading && <div className="gifContainer">
                    <img src={loadingGif} className="loadingGif" />
                </div>}
                {data && data.cod < 301 && !error && <h2>{data.coord.lat}</h2>}
                {data && data.cod < 301 && !error && <Daily render={data} city={city} />}
                {data && data.message && <h3>{data.message}</h3>}
            </div>
        )
    } else {
        return (
            <div>
                <h2>{error}</h2>
            </div>
        )
    }
}

export default Main