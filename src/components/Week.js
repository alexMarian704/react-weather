import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud , faSun , faCloudRain , faSnowflake } from '@fortawesome/free-solid-svg-icons'

export default function Week({temp}) {
    return (
        <div className="daily">
            <h3 className="textTitle">{temp.weather[0].main}</h3>

            {temp.weather[0].main ==="Clouds" && <p className="text-icon"><FontAwesomeIcon icon={faCloud}/></p>}

            {temp.weather[0].main === "Clear" && <p className="text-icon"><FontAwesomeIcon icon={faSun}/></p>}

            {temp.weather[0].main === "Rain" && <p className="text-icon"><FontAwesomeIcon icon={faCloudRain}/></p>}

            {temp.weather[0].main === "Snow" && <p className="text-icon"><FontAwesomeIcon icon={faSnowflake}/></p>}

            <p className="text">{temp.temp.max} &#x2103;</p>

            <p className="text">{new Date(temp.dt*1000).toLocaleDateString()}</p>
        </div>
    )
}
