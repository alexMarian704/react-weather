import React from 'react'

export default function Week({temp}) {
    return (
        <div>
            <h3>{temp.weather[0].main}</h3>
            <p>{temp.temp.max}</p>
            <p>{new Date(temp.dt*1000).toLocaleDateString()}</p>
        </div>
    )
}
