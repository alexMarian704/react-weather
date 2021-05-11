import React from 'react'
import urls from '../data/data'
import useFetch from '../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams, NavLink } from 'react-router-dom'
import loadingGif from '../image/loading2.gif'
import { useHistory } from 'react-router-dom'
import Hourly from './Hourly';
import { motion } from 'framer-motion'
import Wind from './Wind';
import OtherData from './OtherData';

const Currect = () => {
    const { city } = useParams();
    const history = useHistory();
    const { firstUrl } = urls(city)
    const { data, isLoading, error } = useFetch(city, firstUrl);

    if (data && !error && data.cod < 301) {
        return (
            <div id="footer-render-main">
                {data && data.cod < 301 && !error && <NavLink className="week-link" to={`/week/${data.coord.lon}/${data.coord.lat}/${city}`}>Week</NavLink>}

                <button onClick={() => { history.go(-1) }} className="back-but"><FontAwesomeIcon icon={faArrowLeft} /></button>

                <motion.div
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.3 }}
                >

                    <h2 className="temperature">{data.main.temp}&#x2103;</h2>
                    <h2 className="city">{data.name}</h2>
                    <p id="date">{new Date(data.dt * 1000 + 490000).toDateString()}</p>
                    <div className="sun-data-container">
                        <div className="sun-data">
                            <p className="sun-icon-sun"><FontAwesomeIcon icon={faSun} /></p>
                            <p className="sun-text">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                        </div>
                        <div className="sun-data">
                            <p className="sun-icon-moon"><FontAwesomeIcon icon={faMoon} /></p>
                            <p className="sun-text">{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                        </div>
                    </div>
                </motion.div>
                <div>
                    <Hourly render={data} city={city} />
                    <br />
                    <br />
                    <Wind render={data} city={city} />
                    <br />
                    <OtherData data={data}/>
                </div>
            </div>
        )
    } else if (data && data.message !== undefined) {
        return (
            <div id="footer-render-main">
                <h1 className="city">City not found</h1>
                <NavLink to="/" className="city" style={{
                    display:'block',
                }} id="back-link">Back to search page</NavLink>
            </div>
        )
    } else {
        return (
            <div className="gifContainer" id="footer-render-main">
                <img src={loadingGif}
                    className="loadingGif" />
            </div>
        )
    }
}

export default Currect;
