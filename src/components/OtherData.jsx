import React from 'react'

export default function OtherData({data}) {
    return (
        <div className="other-data-container">
            <p className="other-data">Humidity: <span> {data.main.humidity}%</span></p>
            <p className="other-data">Pressure: <span> {data.main.pressure} mbar</span></p>
            <p className="other-data">Visibility:<span>  {Math.ceil(data.visibility/1000)} km</span></p>
        </div>
    )
}
