import {useState, useEffect} from 'react'

function PB_423() {
    const [date, setDate] = useState(new Date())
    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date())
        }, 1000)
    }, [])
    return(
        <>
            <h1>Current Time : {date.toLocaleTimeString()}</h1>
            <h2>Hours : {date.getHours()}</h2>
            <h2>Minutes : {date.getMinutes()}</h2>
            <h2>Secs : {date.getSeconds()}</h2>
        </>
    )
}

export default PB_423
