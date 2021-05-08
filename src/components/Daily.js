import urls from '../data/data'
import useFetch from '../hooks/useFetch'
import Week from './Week'
import { useParams, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Daily = () => {
    const { lon, lat, city } = useParams();
    const { secondUrl } = urls(city, lon, lat)
    const { data, error } = useFetch(lon, secondUrl)
    const history = useHistory();
    if (data)
        console.log(data)

    const back = () => {
        history.go(-1)
    }

    if (!error) {
        return (
            <div>
                <button onClick={back} className="back-but"><FontAwesomeIcon icon={faArrowLeft}/></button>
                <motion.div className="daily-container"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    {data && (data.cod < 301 || data.cod === undefined) && !error && data.daily.map((temp, i) => {
                        if (i > 0)
                            return (
                                <Week temp={temp} key={i} />
                            )
                    })}
                </motion.div>
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

export default Daily;
