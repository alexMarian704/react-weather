import {useState} from 'react'
import urls from '../data/data'
import useFetch from '../hooks/useFetch'

const Test = ({render}) => {
    console.log(render)
    const { secondUrl } = urls('Bucharest', render.coord.lon , render.coord.lat)
    const {data , isLoading , error } = useFetch(null , secondUrl)
    console.log(data)

    return (
        <div>
            <h1>Sal</h1>
        </div>
    )
}

export default Test;
