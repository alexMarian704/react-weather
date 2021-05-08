import React from 'react'
import urls from '../data/data'
import useFetch from '../hooks/useFetch'
import loadingGif from '../image/loading2.gif'
import Hour from './Hour'

const Hourly = ({ render, city }) => {
    const { secondUrl } = urls(city, render.coord.lon, render.coord.lat)
    const { data, isLoading, error } = useFetch(render.coord.lon, secondUrl)
    if (data)
        console.log(data)

    if (data && !error && render) {
        return (
            <div className="hours-container">
                {data.hourly.map((hour , i)=>{
                    if(i>=0 && i<=24)
                    return(
                        <Hour data={hour} key={i}/>
                    )
                })}
            </div>
        )
    } else if (!error) {
        return (
            <div className="gifContainer">
                <img src={loadingGif}
                    className="loadingGif" />
            </div>
        )
    } else {
        return (
            <h1>{error}</h1>
        )
    }
}

export default Hourly;

