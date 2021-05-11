import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faCloud, faSun, faCloudRain, faSnowflake , faPooStorm } from '@fortawesome/free-solid-svg-icons'

const Hour = ({ data }) => {
    return (
        <div className="hour-container">
            <p className="hour-text"><FontAwesomeIcon icon={faTint} style={{
                color: "#00cccc"
            }} /> {data.pop * 100}%</p>

            <p className="hour-text">{new Date(data.dt * 1000).toLocaleTimeString()}</p>

            <p className="hour-text" id="hour-temp">{data.temp}&#x2103;</p>

            {data.weather[0].main === "Clouds" && <p className="text-icon"><FontAwesomeIcon icon={faCloud} /></p>}

            {data.weather[0].main === "Storm" && <p className="text-icon"><FontAwesomeIcon icon={faPooStorm} /></p>}

            {data.weather[0].main === "Clear" && <p className="text-icon"><FontAwesomeIcon icon={faSun} /></p>}

            {data.weather[0].main === "Rain" && <p className="text-icon"><FontAwesomeIcon icon={faCloudRain} /></p>}

            {data.weather[0].main === "Snow" && <p className="text-icon"><FontAwesomeIcon icon={faSnowflake} /></p>}
        </div>
    )
}

export default Hour
