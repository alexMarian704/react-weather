import React from 'react'
import urls from '../data/data'
import useFetch from '../hooks/useFetch'
import loadingGif from '../image/loading2.gif'
import Hour from './Hour'
import { motion } from 'framer-motion'

const Hourly = ({ render, city }) => {
    const { secondUrl } = urls(city, render.coord.lon, render.coord.lat)
    const { data, isLoading, error } = useFetch(render.coord.lon, secondUrl)

    if (data && !error && render) {
        return (
            <motion.div className="hours-container"
                animate={{opacity:1}}
                exit={{opacity:1}}
                initial={{opacity:0}}
                transition={{duration:1.5}}
            >
                {data.hourly.map((hour , i)=>{
                    if(i>=0 && i<=24)
                    return(
                        <Hour data={hour} key={i}/>
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

export default Hourly;

