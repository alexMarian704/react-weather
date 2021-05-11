import React from 'react'
import urls from '../data/data'
import useFetch from '../hooks/useFetch'
import loadingGif from '../image/loading2.gif'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons'

export default function Wind({ render, city }) {
    const { secondUrl } = urls(city, render.coord.lon, render.coord.lat)
    const { data, error } = useFetch(render.coord.lon, secondUrl)

    if (data && !error && render) {
        return (
            <motion.div className="hours-container"
                id="main-wind"
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
            >
                {data.hourly.map((wind, i) => {
                    if (i >= 0 && i <= 24)
                        return (
                            <div className="hour-container" key={i} id="wind-container">
                                <p className="text-icon"><FontAwesomeIcon icon={faWind}/></p>
                                <p className="hour-text">{new Date(wind.dt * 1000).toLocaleTimeString()}</p>
                                <p className="hour-text" id="hour-temp">{Math.ceil(wind.wind_speed*3.6)} km/h</p>
                            </div>
                        )
                })}
            </motion.div>
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
