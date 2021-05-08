import urls from '../data/data'
import useFetch from '../hooks/useFetch'
import Week from './Week'
import { useParams, useHistory } from 'react-router-dom'

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
                <button onClick={back}>Back</button>
                <div className="daily-container">
                    {data && data.cod < 301 && !error && data.daily.map((temp, i) => {
                        if (i > 0)
                            return (
                                <Week temp={temp} key={i} />
                            )
                    })}
                </div>
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
