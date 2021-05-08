import React from 'react'
import urls from '../data/data'
import useFetch from '../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun , faMoon , faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useParams , NavLink} from 'react-router-dom'
import loadingGif from '../image/loading2.gif'
import {useHistory} from 'react-router-dom'

const Currect = () => {
    const { city } = useParams();
    const history = useHistory();
    const { firstUrl } = urls(city)
    const { data, isLoading, error } = useFetch(city, firstUrl);
    if(data)
    console.log(data)

    if(data && !error && data.cod < 301){
    return (
        <div>
             {data && data.cod < 301 && !error && <NavLink to={`/week/${data.coord.lon}/${data.coord.lat}/${city}`}>Week</NavLink>}

             <button onClick={()=>{history.go(-1)}}><FontAwesomeIcon icon={faArrowLeft}/></button>

            <h2 className="temperature">{data.main.temp}&#x2103;</h2>
            <h2 className="city">{data.name}</h2>
            <p id="date">{new Date(data.dt*1000+490000).toDateString()}</p>
            <div className="sun-data-container">
                <div className="sun-data">
                    <p className="sun-icon-sun"><FontAwesomeIcon icon={faSun}/></p>
                    <p className="sun-text">{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</p>
                </div>
                <div className="sun-data">
                    <p className="sun-icon-moon"><FontAwesomeIcon icon={faMoon}/></p>
                    <p className="sun-text">{new Date(data.sys.sunset*1000).toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
    )
    }else if(isLoading === true){
        return(
            <div className="gifContainer">
                <img src={loadingGif}
                className="loadingGif" />
            </div>
        )
    }else{
        return(
            <div>
                <h1>City not found</h1>
                <NavLink to="/">Back to search page</NavLink>
            </div>
        )
    }
}

export default Currect;
