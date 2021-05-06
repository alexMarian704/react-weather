import {useState} from 'react'
import urls from '../data/data'
import useFetch from '../hooks/useFetch'
import Week from './Week'

const Daily = ({render , city}) => {
    console.log(render)
    const { secondUrl } = urls(city, render.coord.lon , render.coord.lat)
    const {data , isLoading , error } = useFetch(render.coord.lon , secondUrl)
    if(data)
    console.log(data)

    if(!error){
    return (
        <div className="daily-container">
           {data && data.cod != 400 && !error && data.daily.map((temp , i)=>{
               return(
                <Week temp={temp} key={i}/>
               )
           })}
        </div>
    )
    }else{
        return(
            <div>
                <h2 className="textTitle">{error}</h2>
            </div>
        )
    }
}

export default Daily;
