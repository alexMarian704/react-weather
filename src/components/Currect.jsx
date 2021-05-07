import React from 'react'
import urls from '../data/data'
import useFetch from '../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun , faMoon} from '@fortawesome/free-solid-svg-icons'

const Currect = ({render , city}) => {
    console.log(render)
    const { secondUrl } = urls(city, render.coord.lon , render.coord.lat)
    const {data , isLoading , error } = useFetch(render.coord.lon , secondUrl)

    return (
        <div>
            <h2 className="temperature">{render.main.temp}&#x2103;</h2>
            <h2 className="city">{render.name}</h2>
            <p id="date">{new Date(render.dt*1000+490000).toDateString()}</p>
            <div className="sun-data-container">
                <div className="sun-data">
                    <p className="sun-icon-sun"><FontAwesomeIcon icon={faSun}/></p>
                    <p className="sun-text">{new Date(render.sys.sunrise*1000).toLocaleTimeString()}</p>
                </div>
                <div className="sun-data">
                    <p className="sun-icon-moon"><FontAwesomeIcon icon={faMoon}/></p>
                    <p className="sun-text">{new Date(render.sys.sunset*1000).toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Currect;
